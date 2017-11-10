var User = require('./models').User;
const models = require('./models')
const Post = require('./models').Post
const Vote = require('./models').Vote
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  User.findOne({where: {id: id}})
  .then((user) => {
    done(null, user)})
  .catch((err) => console.log('prob in deserializeUser', err));

});

passport.use(new LocalStrategy(function(username, password, done) {

  User.findOne({where: {username: username, password: password}})
  .then((user) => {
    if(user.username){
      done(null, user)
    } else{
      console.log('did not pass LocalStrategy', user);
      done(null,false)
    }
    })
  .catch((err) => done(null, false))
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/user/login', passport.authenticate('local', {
  successRedirect: res.json({user: req.user}),
  failureRedirect: '/'
}))

module.exports = router;
