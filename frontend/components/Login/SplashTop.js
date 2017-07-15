import React from 'react';

const SplashTop = () => {
    return (
    <div className = "hometopbox">
      <span className = "h2">Tutors are just a few clicks away</span>
      <div className = "infoimg">
          <img src="/img/info.png" className = "info"/>
      </div>
      <button className = "loginbutton pink">
        <span className = "h4">Login with Google</span>
      </button>
    </div>
    );
};

export default SplashTop;
