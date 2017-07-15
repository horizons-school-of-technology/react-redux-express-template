import React from 'react';
import RoomListComponent from './RoomListComponent';
import GetHelpComponent from './GetHelpComponent';

const displayMessage =
'The React Redux Boilerplate is running successfully!';

// class component
const TutorHomeComponent = (props) => {
  console.log('TUTOR HOME: ', props.socket);

  return (
    <div>
      <RoomListComponent socket={props.socket} />
    </div>
  );
};


export default TutorHomeComponent;
