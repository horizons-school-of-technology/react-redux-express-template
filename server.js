const PORT = process.env.PORT || 3000;
const path = require('path');
const routes = require('./backend/routes/index');
var auth = require('./backend/routes/auth');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// models
var models = require('./backend/models/models');
var User = models.User;

var session = require('express-session');
var connect = mongoose.connect(process.env.MONGODB_URI);


// app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'keyboard cat' }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// webpack and react stuff
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// Tell Passport how to set req.user
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Tell passport how to read our user models
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
    User.findOne({ username: username }, function(err, user) {
      // if there's an error, finish trying to authenticate (auth failed)
        if (err) {
            console.log(err);
            return done(err);
        }
        // if no user present, auth failed
        if (!user) {
            console.log(user);
            return done(null, false);
        }
        // if passwords do not match, auth failed
        if (user.password !== password) {
            return done(null, false);
        }
        // auth has has succeeded
        return done(null, user);
    });
}));

app.use('/', auth(passport));
app.use('/', routes);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
