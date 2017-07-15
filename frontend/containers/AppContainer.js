import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import Title from '../components/Title';
import HomeComponent from '../components/HomeComponent';
import SplashComponent from '../components/SplashComponent';

const AppContainer = ({ name }) => {
    return (
        <div>
            <SplashComponent/>
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
