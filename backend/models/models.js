var express = require('express');
var mongoose = require('mongoose');
// var passport
// var findOrCreate = require('mongoose-find-or-create');
var connect = process.env.MONGODB_URI;
// var findOrCreate = require('mongoose-find-or-create');

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    booksOwned: Array  // array of document ID's
});

var User = mongoose.model('User', userSchema);


module.exports = {
    User: User
};
