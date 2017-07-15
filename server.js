const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const api = require('./backend/api');
var passport = require('passport');
var passportConfig = require('./backend/config/passport.js')(passport);
var session = require('express-session');

// START SOCKET SERVER STUFF
const server            = require('http').Server(app);
const io                = require('socket.io')(server);
const socketConfig = require ('./backend/sockets.js');
socketConfig(io);
// END SOCKET SERVER STUFF

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

server.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
