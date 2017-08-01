const express = require('express');

const router = express.Router();
const models = require('./models/models.js');
// IMPORTING ALL MODELS
const User = models.User;
const Book = models.Book;
// const passport = require('passport');
// hashing
const crypto = require('crypto');

const isEmail = require('is-email');

function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// ROUTES:

router.post('/register', async (req, res) => {
  const isValidUser = (user) => {
    if (!user.fname) {
      return Promise.reject('Please enter your first name.');
    }
    if (!user.lname) {
      return Promise.reject('Please enter your last name.');
    }
    if (!isEmail(user.email)) {
      return Promise.reject('Please enter a valid email address.');
    }
    if (!user.username) {
      return Promise.reject('Please enter a username.');
    }
    if (!user.hashedPassword) {
      return Promise.reject('Please enter a password.');
    }
    return new Promise((resolve, reject) => {
      User.findOne({ email: user.email }, (err, foundUser) => {
        if (err) {
          return reject(err);
        }
        return resolve(foundUser);
      });
    });
  };


  const validUser = {
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashPassword(req.body.password),
    library: [],
  };

  console.log('validUser', validUser);

  try {
    const user = await isValidUser(validUser);
    console.log('VALIDATE:', user);

    if (user) {
      res.json({ error: 'email taken' });
      return;
    }
    new User(validUser).save((err, newUser) => {
      if (err) {
        res.json({ failure: 'failed to save new user' });
      } else {
        res.json({ success: 'saved new user' });
        console.log('saved the new user!!');
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

// gets the user, gets the user's library
// router.post('/', (req, res) => {
//   const userId = req.body.id;
//     User.findById(userId)
//     .populate('library')
//     .exec((err, user) => {
//       if (err) {
//         res.json({ failure: 'failed to find user' });
//       }
//       console.log(user);
//       res.json({ success: true, books: user.library });
//     });
//   });

router.get('/explore', (req, res) => {
  Book.find()
  .exec((err, books) => {
    res.json({ success: true, library: books });
  });
});

router.get('/read/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  Book.findById(bookId, (err, book) => {
    if (err) {
      res.json({ failure: 'failed to find book' });
    }
    res.json({ success: true, book: book });
  });
});

module.exports = router;
