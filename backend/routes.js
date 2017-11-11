const express = require('express');
const router = express.Router();
const User = require('../root/models').User;
const Post = require('../root/models').Post;

// YOUR API ROUTES HERE
router.get('/:username', (req, res) => {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
        console.log('user when finding by username: ', user);
        res.json({success: true, user: user});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

router.get('/', (req, res) => {
    console.log('req user is: ************************', req.user);
    User.findById(req.user.id)
    .then(user => {
        console.log('user when finding user on /: ', user);
        res.json({success: true, user: user});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

router.post('/post/new', (req, res) => {
    console.log('req user is ', req.user);
    Post.create({
        title: req.body.title,
        content: req.body.content,
        postId: req.body.postId,
        userId: req.user.id
    })
    .then(post => {
        res.json({success: true, post: post});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

router.get('/post/all', (req, res) => {
    Post.findAll({where: {postId: null}})
    .then(posts => {
        res.json({success: true, posts: posts});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

router.get('/post/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        res.json({success: true, post: post});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

module.exports = router;
