const express = require('express');
const router = express.Router();
const User = require('../root/models').User;

module.exports = (passport) => {
    router.post('/register', (req, res) => {
        console.log('here', req.body);
        User.create({
            username: req.body.username,
            password: req.body.password
        })
          .then(user => {
              res.json({success: true, user: user});
          })
          .catch(err => {
              res.json({success: false, error: err});
          });
    });

    router.post('/login', passport.authenticate('local'), (req, res) => {
        res.json({success: true, user: req.user});
    });

    router.get('/logout', (req, res) => {
        console.log('in the logout', req.user);
        req.logout();
        console.log('after logout', req.user);
        res.redirect('/');
    });

    return router;
};
