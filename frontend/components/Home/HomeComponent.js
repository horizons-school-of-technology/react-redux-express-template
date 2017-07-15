import PropTypes from 'prop-types';
import React from 'react';
import HomeHeaderComponent from '../Header';
import HomeTopComponent from './Top';
import HomeBottomComponent from '../Login/SplashBottom';

const HomeComponent = () => {
    return (
        <div>
            <HomeHeaderComponent/>
            <HomeTopComponent/>
            <HomeBottomComponent/>
        </div>
    );
};

export default HomeComponent;
