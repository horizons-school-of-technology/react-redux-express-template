const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/api');
var passport = require('passport');
var passportConfig = require('./backend/config/passport.js')(passport);
var session = require('express-session');

// START SOCKET SERVER STUFF PART 1
const server            = require('http').Server(app);
const io                = require('socket.io')(server);
// END SOCKET SERVER STUFF PART 1

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
})

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
        passport.authenticate('google', {
                successRedirect : '/',
                failureRedirect : '/login'
        }));

// app.use((req, res, next) => {
//   if (req.user) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// });

//-------LOGIN WALL-----

//Route that leads to the Authentiction Part
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});



app.use('/api', api);





// START SOCKET SERVER STUFF PART 2
var roomUsers = {}; //
var typingPeople = {}; //object with username and timeout key-value pairs

io.on('connection', socket => {
  console.log('connected');
  // REPLACE WITH NEW ROOM
  socket.room = 'DEFAULT';


  // RECEIVE MESSAGE EVENT
  socket.on('message', message => {
    if (!socket.room) {
      return socket.emit('errorMessage', 'No rooms joined!');
    }
    console.log('server received message');
    io.to(socket.room).emit('message', {
      username: socket.username,
      content: message
    });
  });

  // RECEIVE TYPING EVENT
  socket.on('typing', () => {
    if (!socket.room) {
      return socket.emit('errorMessage', 'No rooms joined!');
    }
    console.log('receives typing');
    socket.to(socket.room).emit('typing', { username: socket.username } );
    //create new timeout
    if (typingPeople[socket.username]) {
      clearTimeout(typingPeople[socket.username]);
    }
    var timeout = setTimeout(() => {
      //stop typing notification if user not still typing keys
      socket.to(socket.room).emit('stoptyping', { username: socket.username});
    }, 400);
    typingPeople[socket.username] = timeout;
  });
  // RECEIVE STOP TYPING EVENT
  socket.on('stoptyping', () => {
    if (!socket.room) {
      return socket.emit('errorMessage', 'No rooms joined!');
    }
    console.log('receives stop of typing');
    socket.to(socket.room).emit('stoptyping', { username: socket.username });
  });
  // RECEIVE DISCONNECT OF SPECIFIC USER
  socket.on('disconnect', ()  => {
    var oldUsers = roomUsers[socket.room];
    oldUsers.splice(oldUsers.indexOf(socket.username), 1);
    roomUsers[socket.room] = oldUsers;
  })
});
// END SOCKET SERVER STUFF PART 2



app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
