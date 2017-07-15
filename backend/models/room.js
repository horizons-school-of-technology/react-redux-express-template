var mongoose = require('mongoose');

// define the schema for our room model
var roomSchema = mongoose.Schema(
  {
    subject : String,
    grade : String,
    occupants: Number
  });

// create the model for users and expose it to our app
module.exports = mongoose.model('Room', roomSchema);