import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal } from '../actions/index';
import { Link } from 'react-router-dom';

const SideBar = ( { loginRegisterClick, username } ) => {
    return (
        <div className="sideBar">
          {username ? <h2>{username}</h2> : <button onClick={loginRegisterClick}>Login</button>}
          {username ? <button><Link to="/post/new">Submit Post</Link></button> : <button onClick={loginRegisterClick}>Register</button>}
          <p>Description</p>
        </div>
    );
};

SideBar.propTypes = {
    loginRegisterClick: PropTypes.func,
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
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
