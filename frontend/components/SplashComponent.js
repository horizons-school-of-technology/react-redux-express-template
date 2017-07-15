import React from 'react';
import HomeHeaderComponent from '../components/Header';
import SplashTop from '../components/SplashTop';
import HomeBottomComponent from '../components/Bottom';

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
