var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var User = require('../models/user');

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
  });

  // Google Authentication Strategy
  passport.use(new GoogleStrategy({
    clientID        : configAuth.googleAuth.clientID,
    clientSecret    : configAuth.googleAuth.clientSecret,
    callbackURL     : configAuth.googleAuth.callbackURL,
  },
  function(token, refreshToken, profile, done) {
    // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(function() {
      // try to find the user based on their google id
      User.findOne({ 'google.email' : profile.emails[0].value }, function(err, user) {
        if (err) return done(err);

        if (user) {
            return done(null, user);
        } else {
          // if the user isnt in our database, create a new user
          var newUser = new User();

          // set all of the relevant information
          newUser.google.id    = profile.id;
          newUser.google.token = token;
          newUser.google.name  = profile.displayName;
          newUser.google.email = profile.emails[0].value; // pull the first email

          // save the user
          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
};
