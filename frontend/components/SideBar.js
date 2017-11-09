import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SideBar = ( isModalOpen ) => {
    return (
        <div className="sideBar">
          <button>SubmitPost</button>
          <button>Login</button>
          <button>Register</button>
          <p>Description</p>
        </div>
    );
};

SideBar.propTypes = {
    isModalOpen: PropTypes.Boolean
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
