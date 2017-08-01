var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  phone: String
});



User = mongoose.model('User', userSchema);

module.exports = {
    User:User
};
