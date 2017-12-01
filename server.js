const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const sequelize = require('./models.js')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var session = require('cookie-session');
var bcrypt = require('bcrypt');



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({keys: [process.env.SECRET || 'h0r1z0n5']}))

// Passport
passport.serializeUser(function(user, done) {
  console.log(user);
  return done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  sequelize.query('SELECT * FROM users WHERE id = $1', [id])
    .then(result => {
      console.log("result rows", result.rows);
      return done(null, result.rows[0])
    });
});

passport.use(new LocalStrategy(function(username, password, done) {
  sequelize.query('SELECT * from users where username=$1', [username])
    .then(result => {
      if(result.rows.length === 0) {
        var newError = new Error('No username exists in our database');
        return(newError, null);
      }
      bcrypt.compare(password, result.rows[0].password, function(err, res) {
        console.log("RES", res);
        if(!res) {
          // var passwordError = new Error('Username or Password is incorrect!');
          console.log('Username or password is incorrect!');
          return done(null);
        }
        return done(null, result.rows[0]);
      });
    });
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
