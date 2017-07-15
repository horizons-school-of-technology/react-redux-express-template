import React from 'react';
import RoomPreviewComponent from './RoomPreviewComponent';

const displayMessage =
'Room List Component';
// class component
class RoomListComponent extends React.Component {
  render(){
    return (
      <div>
        <h1 style={{textAlign: "center"}}> Current Classes that need Assistance </h1>
        <RoomPreviewComponent socket={this.props.socket}
          grade={this.props.grade}
          subject={this.props.subject}/>
        </div>
      );
    }
  };


  export default RoomListComponent;
