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
              res.json({success: false, err: err});
          });
    });

    router.post('/login', passport.authenticate('local'), (req, res) => {
        res.json({success: true, user: req.user});
    });

    router.get('/logout', (req, res) => {
        req.logout();
        res.json({success: true});
    });

    return router;
};
