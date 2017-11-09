"use strict";

var express = require('express');
var router = express.Router();
const {
  User,
} = require('../models');

var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
  .then(user => {
    done(null, user)
  })
  .catch(err => {
    console.log(err);
    done(err, null)
  })
});

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({
    where: {
      username,
    }
  })
  .then(user => {
    if (!user) return done(null, false, { message: 'no such username' })
    else if (user.dataValues.password !== password) return done(null, false, { message: 'wrong pw' })
    else return done(null, user)
  })
  .catch(err => {
    console.log(err);
    done(err, null)
  })
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/register', function(req, res, next) {
  if (req.body.password !== req.body.password2) {
    res.status(400).render('register', {
      error: 'Passwords do not match'
    });
  }
  else {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(400).json(err)
      console.log(err);
    })
  }
});

// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;
