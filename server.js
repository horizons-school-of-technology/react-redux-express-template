const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const bodyParser = require('body-parser');
const { User } = require('./models');
var session = require('cookie-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({keys: [process.env.SECRET || 'h0r1z0n5']}));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((desUser)=>{
            done(null, desUser);
        })
        .catch((err)=> {
            console.log('error deserializing: ', err);
            done(null, false);
        });
});

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ where: { username: username }})
  .then((user)=>{
      if (!user) {
          return done(null, false, {
              message: 'user not found'
          });
      } else if (user.get('password') !== password) {
          return done(null, false, {
              message: 'wrong password'
          });
      }
      return done(null, user);
  })
   .catch((err)=> {
       // console.log('error logging in: ', err);
       return done(err, false);
   });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api(passport));

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
