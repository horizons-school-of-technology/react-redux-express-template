import PropTypes from 'prop-types';
import React from 'react';
import HomeHeaderComponent from '../components/Header';
import HomeTopComponent from '../components/Top';
import HomeBottomComponent from '../components/Bottom';

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
