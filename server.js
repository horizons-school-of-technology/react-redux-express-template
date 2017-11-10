const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./root/models').User;
const routes = require('./backend/routes');
var auth = require('./backend/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Find a user by id and call done(null, user)
  // YOUR CODE HERE
    User.findById(id)
    .then((user) => {
        console.log('deserialized user is: ', user.dataValues);
        done(null, user.dataValues);
    })
    .catch((err) => {
        console.log('error deserializing user: ', err);
    });
});

passport.use(new LocalStrategy((username, password, done) => {
  // Find a user by username, if password matches call done(null, user)
  // otherwise call done(null, false)
  // YOUR CODE HERE
    User.findAll({where: {username: username}})
    .then((user) => {
        console.log('user in local strategy is: ', user[0].dataValues);
        if(user[0].dataValues.password === password) {
            done(null, user[0].dataValues);
        } else {
            done(null, false);
        }
    })
    .catch((err) => {
        console.log('error finding local user', err);
        done(null, false);
    });
}));

app.use('/', auth(passport));
app.use('/', routes);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
