const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash=require('connect-flash');
mongoose.connect(process.env.MONGODB_URI);
const nev=require('email-verification')(mongoose);
app.set('views',__dirname+'/frontend');
app.set('view engine','ejs')
app.use(require('morgan')('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('cookie-parser')());
app.use(require('express-session')({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false,
   cookie:{maxAge:50000}}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

require('./config/nev.js')(nev);
require('./backend/models/Users');
require('./config/passport.js')(passport);
require('./backend/appRoutes')(app,passport,nev);


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
