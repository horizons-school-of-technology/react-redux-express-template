import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import DevTools from './DevTools';
import Feed from '../components/Feed';
import NewPost from '../components/NewPost';

const AppContainer = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            {/* <Feed /> */}
            <NewPost />
            <DevTools />
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
