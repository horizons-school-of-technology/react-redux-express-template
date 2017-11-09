const express = require('express');
const router = express.Router();
const {User} = require('./models');

// YOUR API ROUTES HERE
router.post('/post/new', (req, res) => {
  console.log(req.user);
  // Post.create({userId: req.user
});

module.exports = router;
