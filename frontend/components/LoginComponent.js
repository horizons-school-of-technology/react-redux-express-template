import React from 'react';
import { Link, Route } from 'react-router-dom';
import StudentHomeComponent from '../components/StudentHomeComponent';




const displayMessage =
'home Component!';

// class component
const HomeComponent = (props) => {
  return (
    <div>
      <h1>{props.amanda}</h1>

      <Link to="/student/home">
        <button style={{width: 100, height: 50}}>
          Student
        </button>
      </Link>

      <Link to="/tutor/register">
        <button style={{width: 100, height: 50}}>
          Tutor
        </button>
      </Link>
    </div>
  );
};


export default HomeComponent;
