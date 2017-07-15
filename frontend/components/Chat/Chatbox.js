import React from 'react';

const Chatbox = () => {
    return (
    <div>


      <div className = "chatcontainer">
        <div className = "chatboxheader">
          <div>
            <span className = "h2">Grade 5 Physics</span>
          </div>
          <div className = "chatbuttoncontainer">
            <button className = "chatbutton pink">
              <span className = "h4">Waiting for tutor...</span>
            </button>
            <button className = "chatbutton pink">
              <span className = "h4">5 Students</span>
            </button>
          </div>
        </div>


        <div className = "chatbox yellow">
          <span className = "chat">Grade 5 Physics</span>
          <span className = "chat">Grade 5 Physics</span>
          <span className = "chat">Grade 5 Physics</span>
          <input className = "inputfield" placeholder = " Write your message..."/>
        </div>
      </div>


      <center><img src="/img/desk.png" className = "desk"/></center>
    </div>
    );
};

export default Chatbox;
