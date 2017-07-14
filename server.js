const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/api');
const passport = require('passport');
//const passportConfig = require('./backend/config/passport.js')(passport);
const session = require('express-session');
const mongoose = require('mongoose');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

const configDB = require('./backend/config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./backend/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


// required for passport
app.use(session({ secret: 'ilovehorizonshackathon' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
})

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
        passport.authenticate('google', {
                successRedirect : '/',
                failureRedirect : '/login'
        }));


app.use((req, res, next) => {
  console.log('should be a user: ', req.user);
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
});

//-------LOGIN WALL-----
app.use(express.static(path.join(__dirname, 'public')));

//Route that leads to the Authentiction Part
app.get('/', (request, response) => {
    console.log('hitting route!');
    console.log('user: ', request.user);
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});



app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
