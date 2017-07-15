const express = require('express');
const router = express.Router();
var User = require('./models/user');
var Room = require('./models/room');

//Route to initialize a newly logged in user in the React App
router.route('/initialize')
  .get(function(req, res) {
    User.findOne({ 'google.email' : req.user.google.email }, function(err, user) {
      if (err) return console.log(err);
      if (user.local.role) {
        res.json({
          registered: true,
          user: req.user})
      } else {
        res.json({
          registered: false,
          user: null})
      }
    });
  }).post(function(req, res) {
    User.findOne({ 'google.email' : req.user.google.email }, function(err, user) {
      if (err) console.log(err);
      if (user) {
        user.local.role = req.body.role;
        user.local.school = req.body.school;
        user.local.preferences = req.body.preferences;
        user.save(function(err, updatedUser) {
          if (err) {res.json({updated: false,user: user});}
          if (updatedUser) {
            req.user = updatedUser;
            res.json({updated: true, user: updatedUser})
          }
        });
      }
    });
  });

router.route('/rooms')
  .get(function(req, res) {
    Room.find({}, function(err, rooms) {
      res.json({rooms});
    })

  }).post(function(req, res) {
    var room = new Room({
      subject: req.body.subject,
      grade: req.body.grade,
      occupants: 0
    });
    room.save(function(err, savedRoom) {
      if (err) {res.json({craeted: false, room: savedRoom})}
      if (savedRoom) {res.json({created: true, room: savedRoom})}
    });

  });


module.exports = router;
