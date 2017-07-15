import React from 'react';
import { Link } from 'react-router-dom';

const HomeTopComponent = () => {
    return (
    <div className = "hometopbox">
      <span className = "h1">I am a...</span>
      <div className = "homeboxbuttons">
        <Link to='/student/home'>
          <button className = "homebutton pink">
            <span className = "h2">Student</span>
          </button>
        </Link>
        <Link to="/tutor/register">
          <button className = "homebutton pink">
            <span className = "h2">Tutor</span>
          </button>
        </Link>
      </div>
      <img src="/img/desk.png" className = "desk"/>
    </div>
    );
};

export default HomeTopComponent;
