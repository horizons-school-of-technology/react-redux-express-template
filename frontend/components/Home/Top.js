import React from 'react';

const HomeTopComponent = () => {
    return (
    <div className = "hometopbox">
      <span className = "h1">I am a...</span>
      <div className = "homeboxbuttons">
        <button className = "homebutton pink">
          <span className = "h2">Student</span>
        </button>
        <button className = "homebutton pink">
          <span className = "h2">Tutor</span>
        </button>
      </div>
      <img src="/img/desk.png" className = "desk"/>
    </div>
    );
};

export default HomeTopComponent;
