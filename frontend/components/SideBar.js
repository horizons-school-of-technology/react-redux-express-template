import React from 'react';
import PropTypes from 'prop-types';
import SubmitPost from './SubmitPost';
import Description from './Description';
import Login from './Login';
import { connect } from 'react-redux';
import {toggleModalAction, toggleSaveUser} from '../actions/index'




const SideBar = ( { toggleModal, isModalOpen, saveUser, username } ) => {
  console.log(username);
    return (
        <div>
        {username}
        <SubmitPost/>
        <Login toggleModal={toggleModal} isModalOpen={isModalOpen} saveUser={saveUser} />
        <Description/>
        </div>
    );
};

SideBar.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        username: state.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      toggleModal: () => {dispatch(toggleModalAction())},
      saveUser: (u) => {dispatch(toggleSaveUser(u))}


    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
