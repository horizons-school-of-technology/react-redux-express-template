import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import MyModal from '../components/MyModal';


const AppContainer = () => {
    return (
        <div id="appContainer">
          <Header/>
          <div className="main">
            <Feed/>
            <SideBar/>
          </div>
          <MyModal/>
        </div>
    );
};

AppContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
