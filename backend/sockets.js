
module.exports = function(io) {
  var roomUsers = {}; // object with room as key, and room users as value
  var typingPeople = {}; //object with username and timeout key-value pairs

  io.on('connection', socket => {
    console.log('connected');
    /**  REPLACE WITH NEW ROOM  **/
    socket.room = 'DEFAULT';
    /**  REPLACE WITH NEW ROOM  **/


    /** LISTENERS FOR ROOM PREVIEW **/
    // RECEIVE REQUEST FOR ALL ROOMS
    socket.on('getrooms', () => {
      console.log('SERVER RECEIVED GET ROOMS');
      socket.emit('getrooms', roomUsers);
    });




    /** LISTENERS FOR CHAT ROOM **/
    // RECEIVE ROOM
    socket.on('room', ({requestedRoom, username}) => {
      if (!requestedRoom) {
        return socket.emit('errorMessage', 'No room!');
      }

      if (username) {
        socket.username = username;
      }

      if (socket.room) {
        socket.leave(socket.room);
        socket.to(socket.room).emit('message', {
          username: 'System',
          content: `${socket.username} has left :(`
        });

        //remove from old room
        var oldRoomUsers = roomUsers[socket.room]  || [];
        var newOld = oldRoomUsers.slice();
        newOld.splice(oldRoomUsers.indexOf(socket.username), 1);
        roomUsers[socket.room] = newOld;

        // EMIT updated users including this one to room
        io.to(socket.room).emit('updateusers', roomUsers[socket.room]);
      }
      //join new room:
      socket.room = requestedRoom;
      socket.join(requestedRoom, () => {
        console.log('reached room on server');

        socket.to(requestedRoom).emit('message', {
          username: 'System',
          content: `${socket.username} has joined`
        });

        var newRoomUsers = roomUsers[socket.room] || [];
        var newNew = newRoomUsers.slice();
        newNew.push(socket.username);
        roomUsers[socket.room] = newNew;
        io.to(requestedRoom).emit('updateusers', roomUsers[socket.room]);
      });
    });

    // RECEIVE MESSAGE EVENT
    socket.on('message', message => {
      if (!socket.room) {
        return socket.emit('errorMessage', 'No rooms joined!');
      }
      console.log('server received message');
      io.to(socket.room).emit('message', {
        username: socket.username,
        content: message
      });
    });

    // RECEIVE TYPING EVENT
    socket.on('typing', () => {
      if (!socket.room) {
        return socket.emit('errorMessage', 'No rooms joined!');
      }
      console.log('receives typing');
      socket.to(socket.room).emit('typing', { username: socket.username } );
      //create new timeout
      if (typingPeople[socket.username]) {
        clearTimeout(typingPeople[socket.username]);
      }
      var timeout = setTimeout(() => {
        //stop typing notification if user not still typing keys
        socket.to(socket.room).emit('stoptyping', { username: socket.username});
      }, 400);
      typingPeople[socket.username] = timeout;
    });
    // RECEIVE STOP TYPING EVENT
    socket.on('stoptyping', () => {
      if (!socket.room) {
        return socket.emit('errorMessage', 'No rooms joined!');
      }
      console.log('receives stop of typing');
      socket.to(socket.room).emit('stoptyping', { username: socket.username });
    });
    // RECEIVE DISCONNECT OF SPECIFIC USER
    socket.on('disconnect', ()  => {
      var oldUsers = roomUsers[socket.room] || [];
      oldUsers.splice(oldUsers.indexOf(socket.username), 1);
      roomUsers[socket.room] = oldUsers;
    })
  });
}
