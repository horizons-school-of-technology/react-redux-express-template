import React from 'react';
import GetHelpComponent from './GetHelpComponent';
// class component
const StudentHomeComponent = (props) => {
  console.log('STUDENT HOME: ', props.socket);
  const socket = props.socket;
  return (
    <div>
      <div style={{marginBottom: 100}}>
        <GetHelpComponent socket={socket} />
      </div>
    </div>
  );
};


export default StudentHomeComponent;
