const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const createRouter = require('./backend/routes');
const auth = require('./backend/auth');
const bodyParser = require('body-parser');
const {
  User,
  Post,
} = require('./models');

var cookieParser = require('cookie-parser');
var session = require('cookie-session');
app.use(cookieParser());
app.use(session({keys: [process.env.SECRET || 'h0r1z0n5']}))


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
  .then(user => {
    done(null, user)
  })
  .catch(err => {
    console.log(err);
    done(err, null)
  })
});

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({
    where: {
      username,
    }
  })
  .then(user => {
    if (!user) return done(null, false, { message: 'no such username' })
    else if (user.dataValues.password !== password) return done(null, false, { message: 'wrong pw' })
    else return done(null, user)
  })
  .catch(err => {
    console.log(err);
    done(err, null)
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', createRouter(passport));

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
