import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal, logout } from '../actions/index';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SideBar = ( { loginRegisterClick, username, logoutClick } ) => {
    return (
        <div className="sideBar">
          {username ? <h2>{username}</h2> : <button onClick={loginRegisterClick}>Login</button>}
          {username ? <Link to="/post/new"><button>Submit Post</button></Link> : <button onClick={loginRegisterClick}>Register</button>}
          {username ? <button onClick={logoutClick}>Logout</button> : null }
          <p>Description</p>
        </div>
    );
};

SideBar.propTypes = {
    loginRegisterClick: PropTypes.func,
    logoutClick: PropTypes.func,
    username: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        username: state.username
    };
};

const mapDispatchToProps = (dispatch) => ({
    loginRegisterClick: ()=>{
        dispatch(toggleModal());
    },
    logoutClick: async ()=>{
        try{
            await axios.get('/api/logout');
            dispatch(logout());
        }catch(err) {
            console.log("Error:", err);
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
