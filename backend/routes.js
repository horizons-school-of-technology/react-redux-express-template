const express = require('express');
const router = express.Router();
const {Post} = require('./models');

// YOUR API ROUTES HERE
router.post('/post/new', (req, res) => {
  Post.create({userId: req.user.id, title: req.body.title, body: req.body.body})
  .then(() => res.json({msg: 'new post successful'}))
  .catch(err => res.json({err}));
});

router.get('/post/all', (req, res) => {
  Post.findAll()
  .then(resp => res.json({posts: resp}));
});

module.exports = router;
