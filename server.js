// 'use strict';

// Require all necessary modules
const mongoose = require('mongoose');
const models = require('./backend/models/models');

const User = models.User;
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const path = require('path');

// Express set up
const app = express();
app.use(bodyParser.json());

//copied from boilerplate
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded());
app.use(expressJWT({ secret: 'secret' }).unless({ path: ['/login', '/#', '/', '/api/register'] }));
app.use(passport.initialize());
// Mongoose configuration
// When there is an error, run this function:
mongoose.connection.on('error', () => {
  console.log('Could not connect to database');
});

mongoose.connection.on('connected', () => {
  console.log('Success, connected to database');
});

mongoose.connect(process.env.MONGODB_URI);



//COPIED FROM BOILERPLATE
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // For React/Redux
});



app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  const token = jwt.sign({ id: req.body.id }, 'secret');
  res.json({
    success: true,
    user: {
      id: req.user.id,
      fname: req.user.fname,
      lname: req.user.lname,
      username: req.user.username,
      email: req.user.email,
      library: req.user.library,
    },
    token,
  });
});

// session setup
// const session = require('express-session');
//
// const MongoStore = require('connect-mongo')(session);
//
// app.use(session({
//   secret: 'secret',
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection.on('connected', () => {
//       console.log('NEW SESSION');
//     }),
//   }),
// }));

// hashing
const crypto = require('crypto');

function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// passport local strategy
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (hashPassword(password) !== user.hashedPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

// PASSPORT SERIALIZE/DESERIALIZE USER HERE HERE
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(null, user);
//   });
// });

// PASSPORT MIDDLEWARE HERE
// app.use(passport.session());

// require in my routes
const apiroutes = require('./backend/apiroutes');

app.use('/api', apiroutes);

// start my server
app.listen(process.env.PORT || '3000', () => {
  console.log('The server is up!');
});
