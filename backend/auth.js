const express = require('express');
const router = express.Router();
const {User} = require('./models');

router.post('/register', (req, res) => {
  console.log('process.env.DATABASE_NAME', process.env.DATABASE_NAME);
  User.create({username: req.body.username, password: req.body.password})
  .then(user => {
    res.json({user});
  })
  .catch(err => {
    res.json({err});
  });
});

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  const userId = user.get().id;
  done(null, userId);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    // const doneUser = Object.assign({}, user.dataValues, {password: null});
    console.log(user.get());
    done(null, user.get());
  })
  .catch(err => {
    done(err, null);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({where: {username}})
  .then(user => {
    if (!user) {
      return done('no user found with that username', null);
    }
    if (user.password !== password) {
      return done('passwords do not match', null);
    }
    return done(null, user);
  })
  .catch(err => {
    return done(err, null);
  });
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/login', passport.authenticate('local'), (req, res) => {
  const resUser = Object.assign({}, req.user.dataValues, {password: null});
  res.json({user: resUser});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/:username', (req, res) => {
  User.findOne({where: {username: req.params.username}})
  .then(user => {
    const resUser = Object.assign({}, user.dataValues, {password: null});
    res.json({user: resUser});
  })
  .catch(err => {
    res.json({err});
  });
});

router.get('/', (req, res) => {
  res.json({user: req.user});
});

module.exports = router;
