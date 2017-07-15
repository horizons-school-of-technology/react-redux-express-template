import React from 'react';
import { Link, Route } from 'react-router-dom';
// class component
const TutorRegisterComponent = (props) => {
  console.log('TUTOR REGISTER: ', props.socket);

  return (
    <div className={'flexboxcol'}>
      <div style={{flex:1}}>
        School: <input type="text" placeholder="what school do you go to"/>
      </div>
      <div style={{flex:1}}>
        Major: <input type="text" placeholder="what do you study"/>
      </div>
      <div style={{flex:1}}>
        Year: <input type="text" placeholder="what year are you in"/>
      </div>


      <div style={{flex:1}} className={'flexbox'}>
        <div style={{flex:1}}>
          <select style={{flex:1}} name="Grade" placeholder='Grade'>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
            <option value="grade6">Grade 6</option>
            <option value="grade7">Grade 7</option>
            <option value="grade8">Grade 8</option>
            <option value="grade9">Grade 9</option>
            <option value="grade10">Grade 10</option>
            <option value="grade11">Grade 11</option>
            <option value="grade12">Grade 12</option>
          </select>
        </div>
        <div style={{flex:1}}>
          <select style={{flex:1}} name="Subject" placeholder='Subject'>
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="history">History</option>
            <option value="english">English</option>
            <option value="art">Art</option>
            <option value="biology">Biology</option>
          </select>
        </div>

      </div>
      <button style={{flex:1}} type="submit">
        <Link to="/tutor/home">Sign me up</Link>
      </button>
    </div>
  );
};


export default TutorRegisterComponent;
