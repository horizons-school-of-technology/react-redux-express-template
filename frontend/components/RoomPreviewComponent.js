import React from 'react';
// class component
class RoomPreviewComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: [
                {Grade: '5', Course: 'Math', Count: 0},
                {Grade: '6', Course: 'Math', Count: 0},
                {Grade: '7', Course: 'Math', Count: 0},
                {Grade: '8', Course: 'Math', Count: 0},
                {Grade: '5', Course: 'History', Count: 0},
                {Grade: '7', Course: 'History', Count: 0}]
        };
    }
    render() {
        return(
        <div>
            {
                this.state.courses.forEach((course) => {
                    if(course.Grade === this.props.grade){
                        console.log(course.Course)
                    }
                })}

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
