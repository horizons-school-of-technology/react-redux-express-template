import React from 'react';


const displayMessage =
    'Room Preview Component';
// class component
class RoomPreviewComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: [
                {Grade: '5', Course: 'Math'},
                {Grade: '6', Course: 'Math'},
                {Grade: '7', Course: 'Math'},
                {Grade: '8', Course: 'Math'},
                {Grade: '5', Course: 'History'},
                {Grade: '7', Course: 'History'}]
        };
    }
    render() {
        return(
        <div>
            <div style={{color: 'red'}}>{displayMessage}</div>
            <div className={'flexbox'}>

                {this.state.courses.map((course) => (
                    <button className={'classbutton'}>Grade: {course.Grade}, {course.Course}</button>
                ))}

            </div>
        </div>
        );
    }
}


export default RoomPreviewComponent;
