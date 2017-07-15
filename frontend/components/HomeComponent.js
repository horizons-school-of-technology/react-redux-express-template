import React from 'react';
import { Link, Route } from 'react-router-dom';
import StudentHomeComponent from '../components/StudentHomeComponent';




const displayMessage =
  'home Component!';

// class component
const HomeComponent = (props) => {
    return (
        <div>
            <h1>Amanda{props.amanda}</h1>
            <button style={{width: 100, height: 50}}>
                <Link to="/student/home">Student</Link>
            </button>

            <button style={{width: 100, height: 50}}>
                <Link to="/tutor/register">Tutor</Link>
            </button>
        </div>
    );
};


export default HomeComponent;
