import React from 'react';

import ChatRoomMessages from './ChatRoomMessages';

class ChatRoom extends React.Component {
  constructor (props) {
    // expected props: GRADE, SUBJECT, USERNAME
    // expected state: ACTIVEUSERS (array), SOCKET

    super(props);
    console.log('username in cr:', this.props.username);

    this.state = {
      socket: io(),
      activeUsers: [],
      username: this.props.username,
      roomName: 'default',
    };
  }

  join(room) {
    // console.log(room);
    this.setState({roomName: room});
    this.state.socket.emit('room', {requestedRoom: room, username: this.state.username});
    console.log('reaches here in join');
  }

  componentDidMount() {
    this.join(this.state.roomName);
    // socket listeners added to ChatRoom as soon as it's rendered
    this.state.socket.on('updateusers', (data) => {
      this.setState({activeUsers: data})
    });
  }

  render () {
    console.log('ACTIVE USERS: ', this.state.activeUsers);
    return (

      <div className="chatroom">
        {/*title and number of people in room*/}
        <div className="chatroom_header">
          <h1 className="chatroom_title">Grade {this.props.grade} {this.props.subject}</h1>
          <div className="chatroom_countDescrip">
            <h1 className="chatroom_count">{this.state.activeUsers.length}</h1>
            <h4>Active Users</h4>
            {/* <h4></h4> */}
          </div>
        </div>

        <div id="chatroom_messages_box">
          <h2>While waiting for a tutor, chat with students in this room: </h2>

          <h4 className="text-center"> Current users: {this.state.activeUsers.map((user, index) => {
            var returnUser = user;
            if (index !== this.state.activeUsers.length-1) {
              returnUser += ", ";
            }
            return <span className="bold" key={index}> {returnUser}</span>  })}
          </h4>
          <ChatRoomMessages
            grade={this.props.grade}
            subject={this.props.subject}
            username={this.state.username}
            socket={this.state.socket}
          />
        </div>
      </div>
    )
  }

}

export default ChatRoom;
