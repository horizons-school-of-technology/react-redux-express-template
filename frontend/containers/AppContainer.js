import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Title from '../components/Title';
import TutorHomeComponent from '../components/TutorHomeComponent';
import TutorRegisterComponent from '../components/TutorRegisterComponent';
import StudentHomeComponent from '../components/StudentHomeComponent';
import HomeComponent from '../components/HomeComponent';



const AppContainer = (props) => {
    return (
        <div>
            <Link to="/">
                <span className={'hometitle'}>
                    LOGO
                </span>
            </Link>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/student/home" component={StudentHomeComponent} />
            <Route exact path="/tutor/register" component={TutorRegisterComponent} />
            <Route exact path="/tutor/home" component={TutorHomeComponent} />
        </div>
);
};

export default AppContainer;
