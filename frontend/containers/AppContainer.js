import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import AuthModal from '../components/AuthModal';
import * as actions from '../actions/index';

const AppContainer = ({ isModalOpen, toggleLoginModal, login, username}) => {
    return (
        <div>
            <Header />
            <SideBar toggleLoginModal={toggleLoginModal} username={username}/>
            <Feed />
            <AuthModal isModalOpen={isModalOpen} toggleLoginModal={toggleLoginModal} login={login}/>
        </div>
    );
};

AppContainer.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    // logout: PropTypes.func,
    login: PropTypes.func,
    username: PropTypes.string,
    // password: PropTypes.string
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isModalOpen: state.toggleLoginModal.isModalOpen,
        username: state.login.username,
        // password: state.register.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoginModal: () => {
            dispatch(actions.toggleLoginModal());
        },
        // logout: () => {
        //     dispatch(actions.logout());
        // },
        login: (user) => {
            console.log('here', user);
            dispatch(actions.login(user));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
