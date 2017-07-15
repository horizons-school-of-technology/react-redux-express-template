import React from 'react';
// import ReactDOM from 'react-dom';

class ChatRoomMessages extends React.Component {
  constructor (props) {
    // expected props: GRADE, SUBJECT, SOCKET
    // expected state:
      // MESSAGES (array of msg objects), USERNAME (string, current user),
    //    TYPINGUSERS (array), SOCKET, MESSAGE (string of current message)

    super(props);

    console.log('username in msgs:', this.props.username);
    this.state = {
      socket: this.props.socket,
      messages: [],
      username: this.props.username,
      typingusers: [],
      message: ""
    }
  }



  componentDidMount () {


    // socket listeners: message, typing, stoptyping
    this.state.socket.on('message', (msgData) => {
      var newMessages = this.state.messages.slice();
      newMessages.push(`${msgData.username}: ${msgData.content}`);
      this.setState({messages: newMessages});
      console.log('NEW MESSAGES:', this.state.messages);
    });

    this.state.socket.on('typing', (typingData) => {
      if (this.state.typingusers.indexOf(typingData.username) < 0) {
        var newUsers = this.state.typingusers.slice();
        newUsers.push(typingData.username);
        this.setState({typingusers: newUsers});
        // console.log('received typing: ',newUsers,this.state);
      }
    });

    this.state.socket.on('stoptyping', (typingData) => {
      var index = this.state.typingusers.indexOf(typingData.username);
      if (index >= 0) {
        var newUsers = this.state.typingusers.slice();
        newUsers.splice(index, 1);
        this.setState({typingusers: newUsers});
      }
      // console.log('received stop typing: ',this.state);
    });
  }

  componentWillMount() {

  }

  // function to handle submit of new message
  handleSubmit (e) {
    e.preventDefault();
    var msg = this.state.message;
    this.state.socket.emit('message', msg);
    // console.log("sent message to server");
    this.setState({message: ""});
    this.state.socket.emit('stoptyping');
    // console.log('emitted stoptyping')
  }

  // function to handle text input changes
  handleChange (e) {
    var msg = e.target.value;
    this.setState({message: msg});
    this.state.socket.emit('typing');
    // console.log('emitted typing')
  }

  render () {
    return (
      <div className="chatbox yellow">
        {/* map through array of messages, print out all */}
        {this.state.messages.map((msg, index) => {
          var classes = "chatroom_msg";
          var bp = msg.indexOf(':');
          var username = msg.substring(0, bp);

          if (username === 'System') {
            classes += " own_msg system_msg";
          } else if (username === this.state.username) {
            classes += " text-right chatred";
          }
          else {
            classes += " chatblue";
          }

          var message = msg.substring(bp+2, msg.length);

          return (
            <p key={index} className={classes}>
              <span className="chatroom_msg_username">{username}:  </span>
              <span className="chatroom_msg_content">{message}</span>
            </p>
          );
        })}

        {/* map through array of typing users, display all typing */}
        <div>
          {this.state.typingusers.map((user, index) => {
            return <span key={index} className="typing_user">{user} is typing...</span>
          })}
        </div>

        {/* form for input of new message */}
        <form className="chatroom_new_message" onSubmit={(e) => {this.handleSubmit(e)}}>
          <input
            id="chatroom_new_message_text"
            type="text"
            placeholder="Type in your answer(s)..."
            value={this.state.message}
            onChange={(e) => {this.handleChange(e)}}
            className="form-control inputfield" //FIX
          />
          <input
            id="chatroom_new_message_btn"
            type="submit"
            value="Send"
            className="red sendbutton btn btn-primary"
          />
        </form>

      </div>
    )
  }
}

  export default ChatRoomMessages;
