var express = require('express');
var mongoose = require('mongoose');
// var passport
// var findOrCreate = require('mongoose-find-or-create');
var connect = process.env.MONGODB_URI;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    booksOwned: Array  // array of document ID's
});
const User = mongoose.model('User', userSchema);

const bookSchema = new Schema({
    owner: {
        ref: User,
        type: Schema.Types.ObjectId
    },
    title: String,
    author: String,
    department: String,
    price: Number

});
const Book = mongoose.model('Book', bookSchema);


module.exports = {
    User: User,
    Book: Book
};
