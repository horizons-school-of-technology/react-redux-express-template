import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Import Components
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

// Import Styling
import styles from '../assets/stylesheets/appcontainer.css'

const AppContainer = ({ name }) => {
    return (
        <div className="appcontainer_container">
            <div className="appcontainer_header_container">
              <Header />
            </div>
            <div className="appcontainer_body_container">
              <Sidebar side={'left'}/>
              <Feed />
              <Sidebar />
            </div>
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
