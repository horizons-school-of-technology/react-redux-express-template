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

    router.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            console.log('HERE');
            user ? req.login(user, error => {
                if(err) {return next(error);}
                return res.json({success: true, user: req.user});
            }) : res.json({success: false});
        })(req, res, next);
    });

    router.get('/posts/all', (req, res) => {
        Post.findAll({
            where: {fk_post_id: null}
        })
        .then((posts) => {
            var newPosts = posts.map(post => post.dataValues);
            console.log(newPosts);
            res.json({success: true, posts: newPosts});
        });
    });

    router.use((req, res, next) => {
        console.log(req.user, "MIddleware req.user is this");
        if (!req.user) {
            res.status(401).json({success: 'failed'});
        } else {
            next();
        }
    });

    router.get('/logout', (req, res) => {
        req.logout();
        res.status(200).json({success: true});
    });


    router.get('/:username', (req, res) => {
        User.findOne({where: {username: req.params.username}})
        .then((user) => {
            if(user) {
                console.log(user.dataValues, "USer data values");
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
        console.log(req.body.img, "new post req.body.link");
        Post.create({
            fk_post_id: req.body.postId,
            img: req.body.img,
            description: req.body.description,
            fk_user_id: req.user.id,
            title: req.body.title
        })
        .then(() => {
            console.log('then inside');
            res.json({success: true});
        })
        .catch((error)=>{
            console.log('inside catch', error);
            res.json({success: false, error: error});
        });
    });

    async function recurse(post) {
        try {
            var comments = await Post.findAll({where: {fk_post_id: post.id}});
            if (!comments) {
                return Object.assign({}, post);
            }
            return Object.assign({}, post, {children: comments.map((comment) => recurse(comment))
            });
        } catch (err) {
            return false;
        }
    }

    router.get('/post/:id',  (req, res) => {
        Post.findOne({where: {id: req.params.id}})
          .then(async (post) => {
              var comments = await recurse(post.dataValues);
              if(!comments) {
                  res.json({
                      success: false,
                      comments: null
                  });
              }
              console.log(comments, 'COMMENTS AFTER RECURSE');
              res.json({
                  success: true,
                  postContents: comments
              });
          })
          .catch((err) => {
              console.log('Inside catch for findOne');
              res.json({
                  success: false,
                  error: err
              });
          });
    });


    // SAMPLE ROUTE
    router.use('/users', (req, res) => {
        res.json({ success: true });
    });

    return router;
};
