import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import HeadBar from '../containers/HeadBar';
import Feed from '../containers/Feed';
import SideBar from '../containers/SideBar';

const AppContainer = ({ name }) => {
    return (
        <div>
            <HeadBar />
            <Feed />
            <SideBar />
        </div>
    );
};

AppContainer.propTypes = {
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
)(AppContainer);
