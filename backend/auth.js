const express = require('express');
const router = express.Router();
const {User} = require('./models');

module.exports = function(passport) {
  router.post('/register', (req, res) => {
    console.log('process.env.DATABASE_NAME', process.env.DATABASE_NAME);
    User.create({username: req.body.username, password: req.body.password})
    .then(user => {
      res.json({user});
    })
    .catch(err => {
      res.json({err});
    });
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    const resUser = Object.assign({}, req.user.dataValues, {password: null});
    res.json({user: resUser});
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/:username', (req, res) => {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      const resUser = Object.assign({}, user.dataValues, {password: null});
      res.json({user: resUser});
    })
    .catch(err => {
      res.json({err});
    });
  });

  router.get('/', (req, res) => {
    res.json({user: req.user});
  });

  return router;

}
