import React from 'react';
// class component
class RoomPreviewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: io(),
      courses: [
        // {Grade: '6', Course: 'Math', Count: 0},
        // {Grade: '7', Course: 'Math', Count: 0},
        // {Grade: '8', Course: 'Math', Count: 0},
        // {Grade: '5', Course: 'History', Count: 0},
        // {Grade: '7', Course: 'History', Count: 0}
        ]
      };
    }

    componentDidMount() {
      this.state.socket.emit('getrooms');

      this.state.socket.on('getrooms', (rooms) => {
        console.log('CLIENT RECEIVED ROOM');
        let newCourses = [];
        Object.keys(rooms).map((roomName, index) => {
          const bp = roomName.indexOf(' ');
          const grade = roomName.substring(0, bp);
          const subject = roomName.substring(bp+1, roomName.length);

          newCourses.push({Grade: grade, Course: subject, Count: rooms[roomName].length});
        });
        console.log(newCourses);
        this.setState({courses: newCourses});
      });
    }

    render() {
      return(
        <div>
          {
            this.state.courses.forEach((course) => {
              if(course.Grade === this.props.grade){
                console.log(courses.Course)
              }
            })}

            <div className={'flexbox'}>

              {this.state.courses.map((course, index) => (
                <button key={index} className={'classbutton'}>Grade: {course.Grade}, {course.Course}</button>
              ))}

            </div>
          </div>
        );
      }
    }


    export default RoomPreviewComponent;
