import React from 'react';
// import ReactDOM from 'react-dom';
import ChatRoomMessages from './ChatRoomMessages';

class ChatRoom extends React.Component {
  constructor (props) {
    // expected props: GRADE, SUBJECT, USERNAME
    // expected state: ACTIVEUSERS (array), SOCKET

    super(props);
    this.state = {
      socket: io(),
      activeUsers: []
    };
  }

  // componentDidMount() {
  //   // socket listeners added to ChatRoom as soon as it's rendered
  // }

  render () {
    return (

      <div className="chatroom">
        {/*title and number of people in room*/}
        <div className="chatroom_header">
          <h1 className="chatroom_title">Grade {this.props.grade} {this.props.subject}</h1>
          <h1 className="chatroom_count">{this.state.activeUsers.length}</h1>
          <div className="chatroom_countDescrip">
            <h4>Active</h4>
            <h4>Users</h4>
          </div>
        </div>

        <div id="chatroom_messages_box">
          <h2>While waiting for a tutor, chat with students in this room: </h2>

          <ChatRoomMessages
            grade={this.props.grade}
            subject={this.props.subject}
            username={this.props.username}
            socket={this.state.socket}
          />
        </div>
      </div>
    )
  }

}

export default ChatRoom;
