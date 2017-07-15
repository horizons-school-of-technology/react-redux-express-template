const express = require('express');
const router = express.Router();
var User = require('./models/user');

// YOUR API ROUTES HERE

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
    //console.log(req.user.google);
    //res.json({user: req.user});
  }).post(function(req, res) {
    User.findOne({ 'google.email' : req.user.google.email }, function(err, user) {
      if (err) console.log(err);
      if (user) {
        user.local.role = req.body.role;
        user.local.school = req.body.school;
        user.local.preferences = req.body.preferences;
        user.save(function(err, updatedUser) {
          if (err) {
            res.json({
              updated: false,
              user: user
            });
          }
          if (updatedUser) {
            req.user = updatedUser;
            res.json({
              updated: true,
              user: updatedUser
            })
          }
        });
      }
    });
  });


// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;
