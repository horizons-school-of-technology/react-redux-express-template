var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        school       : String,
        role         : String,
        preferences  : Array
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);