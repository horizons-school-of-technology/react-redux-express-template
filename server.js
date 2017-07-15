const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const configDB = require('./backend/config/database.js');
const api = require('./backend/api');
const auth = require('./backend/auth');
const app = express();


// Connect to Mongo
mongoose.connect(configDB.url); // connect to our database

//Configure Passport
const configPassport = require('./backend/config/passport');
configPassport(passport);

// START SOCKET SERVER STUFF
const server            = require('http').Server(app);
const io                = require('socket.io')(server);
const socketConfig = require ('./backend/sockets.js');
socketConfig(io);
// END SOCKET SERVER STUFF

//Express Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// required for passport
app.use(session({ secret: 'ilovehorizonshackathon' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



//Login Route
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
})

//Authentication Routes
auth(app, passport);
//-------LOGIN WALL-----


//Protected API Routes
app.use('/api', api);

//Route that leads to the React App!
app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});
server.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
