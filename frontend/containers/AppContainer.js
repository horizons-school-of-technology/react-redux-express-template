import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import DevTools from './DevTools';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import NewPost from '../components/NewPost';


import { toggleLoginModal } from '../actions/index';

const AppContainer = ({ toggleLogin }) => {
    return (
        <div>
            <DevTools />
            <Header />
            <Feed />
            <SideBar toggleLogin={toggleLogin} />
        </div>
    );
};

AppContainer.propTypes = {
    toggleLogin: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin: () => {dispatch(toggleLoginModal());}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
