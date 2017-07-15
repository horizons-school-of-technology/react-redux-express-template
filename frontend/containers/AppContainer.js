import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Title from '../components/Title';
import TutorHomeComponent from '../components/TutorHomeComponent';
import TutorRegisterComponent from '../components/TutorRegisterComponent';
import StudentHomeComponent from '../components/StudentHomeComponent';
import HomeComponent from '../components/HomeComponent';
import Routes from '../routes';


const AppContainer = (props) => {
  const amanda = 'ah';
  const socket = io();

  return (
    <div>
      { Routes }
      <div>sadasdasdas
        <Link to="/">
        <span className={'hometitle'}>
          LOGO
        </span>
      </Link>
      <Link to="/student/home">
      <span className={'hometitle'}>
        stuedenthome
      </span>
    </Link>
  </div>
</div>
);
};

export default AppContainer;
