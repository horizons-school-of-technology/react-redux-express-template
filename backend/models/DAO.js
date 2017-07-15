const Room = require('./room');
const User = require('./user');

module.exports = {
  createRoom(subject, grade, callback) {
    var room = new Room({
      subject: subject,
      grade: grade,
      occupants: 0
    });
    room.save(callback);
  },
  deleteRoom(id, callback) {
    Room.deleteOne({ id }, callback);
  },

}
