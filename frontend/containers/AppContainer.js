// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';

const AppContainer = () => {
    return (
        <div id="appContainer">
          <Header/>
          <div className="main">
            <Feed/>
            <SideBar/>
          </div>
        </div>
    );
};

AppContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
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
