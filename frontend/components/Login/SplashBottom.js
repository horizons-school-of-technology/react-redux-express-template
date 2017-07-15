import React from 'react';

const HomeBottomComponent = () => {
    return (
      <div className = "homebottombox yellow">
        <span className="h1 toppad">About</span>
        <div className = "homeboxabout">
          <div className = "about">
            <img src="/img/student.png" className = "aboutimg"/>
            <span className = "h3">Increase access to tutoring for all</span>
          </div>
          <div className = "about">
            <img src="/img/tutor.png" className = "aboutimg"/>
            <span className = "h3">Help college students develop practical teaching skills</span>
          </div>
        </div>
      </div>
    );
};

export default HomeBottomComponent;
