const express = require('express');
const router = express.Router();
var User = require('../models').User;
const models = require('../models');
const Post = require('../models').Post;
const Vote = require('../models').Vote;

router.post('/user/register', (req, res, next) => {
  console.log(req.body);
    User.create({username: req.body.username, password: req.body.password})
    .then((result) => res.json({user: result}))
    .catch((err) => res.status(404).send(err));
});

router.get('/user/logout', (req, res, next) => {
  req.logout();
});

router.get('/user/:username', (req, res, next) => {
  User.findAll({where:{username: req.params.username}})
  .then((result) => res.json({user: result}))
  .catch((err) => res.status(404).json({err: err}))
});

router.get('/user', (req, res, next) => {
  res.json({user: req.user})
})



module.exports = router;
