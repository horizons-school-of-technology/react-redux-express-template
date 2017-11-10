const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');
const bcrypt = require('bcrypt');
let hashedPassword;

module.exports = (passport) => {
  // YOUR API ROUTES HERE
    router.post('/register', (req, res) => {
        User.findAll({where: {username: req.body.username}})
        .then(users => {
            if(req.body.password === req.body.repeatPassword && !users[0]) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    hashedPassword = hash;
                    User.create({
                        username: req.body.username,
                        password: hashedPassword
                    })
                      .then(() => {
                          res.json({success: true});
                      });
                });
            } else {
                res.json({success: false});
            }
        })
      .catch((err)=>console.log(err));
    });

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

    router.use((req, res, next) => {
        if (! req.user) {
            res.redirect('/login');
        } else {
            next();
        }
    });

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get('/:username', (req, res) => {
        User.findOne({where: {username: req.params.username}})
        .then((user) => {
            if(user) {
                console.log(user.dataValues);
                res.json({success: true, user: Object.assign({}, user.dataValues, {password: null})});
            } else {
                res.json({success: false, user: null});
            }
        });
    });

    router.get('/user', (req, res) => {
        User.findOne({where: {username: req.user.username}})
        .then((user) => {
            res.json({success: true, user: user.dataValues});
        });
    });

    router.post('/post/new', (req, res) => {
        Post.create({
            fk_post_id: req.body.postId,
            img: req.body.img,
            description: req.body.description,
            fk_user_id: req.user.username,
            title: req.body.title
        })
        .then(() => {
            res.json({success: true});
        })
        .catch((error)=>{
            res.json({success: false, error: error});
        });
    });

    router.get('/posts/all', (req, res) => {
        Post.findAll({
            where: {fk_post_id: null}
        })
        .then((posts) => {
            console.log(posts);
            res.json({success: true, posts: posts.dataValues});
        });
    });

    // SAMPLE ROUTE
    router.use('/users', (req, res) => {
        res.json({ success: true });
    });

    return router;
};
