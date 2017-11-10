import React from 'react';
import PropTypes from 'prop-types';
import SubmitPost from './SubmitPost';
import Description from './Description';
import Login from './Login';
import { connect } from 'react-redux';




const SideBar = ( { name } ) => {
    return (
        <div>
        <SubmitPost/>
        <Login/>
        <Description/>
        </div>
    );
};

SideBar.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
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
