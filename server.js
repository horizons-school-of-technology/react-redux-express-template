const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const bodyParser = require('body-parser');
const { User } = require('./models');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.post('/register', (req, res) => {
    if (req.body.password !== req.body.password2) {
        res.status(400).json({"success": false, "error": "Passwords do not match"});
    } else {
        User.create({ username: req.body.username, password: req.body.password, img_url: req.body.img_url })
        .then(() => {
            res.status(200).json({"success": true});
        })
        .catch(err => {
            console.log('error registering: ', err);
            res.status(400).json({"success": false, "error": "User with that name already exists."});
        });
    }
});

var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const desUser = await User.findById(id);
        done(null, desUser);
    } catch(err) {
        console.log('error deserializing: ', err);
        done(null, false);
    }
});

passport.use(new LocalStrategy( async (username, password, done) => {
    try {
        const user = await User.findOne({ where: { username: username }});
        if (!user) {
            done(null, false, {
                message: 'user not found'
            });
        } else if (user.get('password') !== password) {
            done(null, false, {
                message: 'wrong password'
            });
        } else {
            done(null, user);
        }
    } catch(err) {
        console.log('error logging in: ', err);
        done(null, false);
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', (req, res) => {
    if (!req.user) {
        res.status(400).json({"success": false, "error": "Invalid username or password"});
    } else {
        res.status(200).json({"success": true });
    }
}));

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
