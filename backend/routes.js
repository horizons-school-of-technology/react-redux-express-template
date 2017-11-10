const express = require('express');
const router = express.Router();
const {Post} = require('./models');

// YOUR API ROUTES HERE
router.post('/post/new', (req, res) => {
  console.log(req.user);
  console.log(req.session);
  // Post.create({userId: req.user
});

router.get('/post/all', (req, res) => {
  console.log(req.session);
  console.log(req.user);
  Post.findAll()
  .then( resp => res.json(resp));
});

module.exports = router;
