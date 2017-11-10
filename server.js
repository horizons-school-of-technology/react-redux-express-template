const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const sequelize = require('./models');
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    sequelize.query(`SELECT * FROM users WHERE id = $1`, [id])

    .then(user => done(null, user.rows[0]))
    .catch((err) => {throw new Error(err);});
});

passport.use(new LocalStrategy(function(username, password, done) {
    sequelize.query(`SELECT * FROM users WHERE username = $1`, [username])
      .then(user => {
          if(user.rows.length === 0){
              return done(null, false);
          } else {
              bcrypt.compare(password, user.rows[0].password, function(err, res) {
                  if(res) {
                      return done(null, user.rows[0]);
                  }
              });
          }
      })
      .catch((err) => {return done(err);});
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
