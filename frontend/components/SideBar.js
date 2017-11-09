import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal } from '../actions/index';

const SideBar = ( {isModalOpen, loginRegisterClick} ) => {
    return (
        <div className="sideBar">
          <button>SubmitPost</button>
          <button onClick={loginRegisterClick}>Login</button>
          <button onClick={loginRegisterClick}>Register</button>
          <p>Description</p>
        </div>
    );
};

SideBar.propTypes = {
    isModalOpen: PropTypes.bool,
    loginRegisterClick: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    };
};

const mapDispatchToProps = (dispatch) => ({
    loginRegisterClick: ()=>{
        dispatch(toggleModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
