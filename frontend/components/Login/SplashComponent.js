import React from 'react';
import HomeHeaderComponent from '../Header';
import SplashTop from './SplashTop';
import HomeBottomComponent from './SplashBottom';

const HomeComponent = () => {
    return (
        <div>
            <HomeHeaderComponent/>
            <SplashTop/>
            <HomeBottomComponent/>
        </div>
    );
};

export default HomeComponent;
