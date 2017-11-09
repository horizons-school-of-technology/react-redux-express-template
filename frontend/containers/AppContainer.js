import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import DevTools from './DevTools';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import NewPost from '../components/NewPost';


import { toggleLoginModal, loginUserClick, registerUserClick, toggleSignUpClick } from '../actions/index';

const AppContainer = ({ state, toggleLogin, loginUser, registerUser, toggleSignUp }) => {
    return (
        <div>
            <Title name={name} />
            <SideBar toggleLogin={toggleLogin}
              loginUser={loginUser}
              registerUser={registerUser}
              toggleSignUp={toggleSignUp}
              state={state}/>
            <DevTools />
        </div>
    );
};

AppContainer.propTypes = {
    state: PropTypes.object,
    toggleLogin: PropTypes.func,
    loginUser: PropTypes.func,
    registerUser: PropTypes.func,
    toggleSignUp: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogin: () => {dispatch(toggleLoginModal());},
        loginUser: (u, p) => {dispatch(loginUserClick(u, p));},
        registerUser: (u, p) => {dispatch(registerUserClick(u, p));},
        toggleSignUp: () => {dispatch(toggleSignUpClick())}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
