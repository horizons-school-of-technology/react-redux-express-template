const express = require('express');
const router = express.Router();
const {User} = require('./models');

module.exports = (passport) => {
  router.post('/register', (req, res) => {
    User.create({username: req.body.username, password: req.body.password})
    .then(user => {
      res.json({user});
    })
    .catch(err => {
      res.json({err});
    });
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({user: req.user});
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/:username', (req, res) => {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      res.json({user});
    })
    .catch(err => {
      res.json({err});
    });
  });

  router.get('/', (req, res) => {
    res.json({user: req.user});
  });

  return router;
};
