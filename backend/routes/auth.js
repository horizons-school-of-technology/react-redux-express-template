const express = require('express');
const router = express.Router();
var models = require('../models/models');

module.exports = function(passport) {
  // GET registration page
    router.get('/register', function(req, res) {
        res.render('registration');
    });

    // POST registration page
    var validateReq = function(userData) {
        return (userData.password === userData.passwordRepeat);
    };

    router.post('/register', function(req, res) {
      // validation step
        if (!validateReq(req)) {
            res.render('/register', {
                error: "Passwords don't match."
            });
        }
        var u = new models.User({
            username: req.body.username,
            password: req.body.password
        });
      u.save(function(err, user) {
        if (err) {
          console.log(err);
          res.status(500).redirect('/register');
          return;
        }
        console.log(user);
        res.redirect('/login');
      });
    });

    // GET Login page
    router.get('/login', function(req, res) {
      res.render('login');
    });


    // POST Login page
    router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
    });

    // GET Logout page
    router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/login');
    });

    return router;
};
