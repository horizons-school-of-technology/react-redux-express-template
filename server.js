const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const auth = require('./backend/auth');
const api = require('./backend/routes');
const cookieSession = require('cookie-session');

const { User } = require('./backend/models.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  keys: [process.env.SECRET || 'super duper secret string']
}));

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

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api/user', auth(passport));
app.use('/api', api);

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
