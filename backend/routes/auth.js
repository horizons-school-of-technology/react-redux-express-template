var express = require('express');
var router = express.Router();
var models = require('../models/models.js');
var User = models.User;

module.exports = function(passport) {
    router.post('/login', passport.authenticate('local'), function(req, res) {
        res.json({success: true, user: req.user});
    });

    router.post('/registration', function(req, res) {
        console.log(req.body);
        var newUser = new User({
            username: req.body.username,
            password: req.body.password,
            booksOwned: []
        });
        console.log("this is newUser: ", newUser);
        newUser.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                res.json({success: true});
            }
        });
    });

    return router;
};
