import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Import Components
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Sidebar2 from '../components/Sidebar2';

// Import Styling
import styles from '../assets/stylesheets/appcontainer.css'

const AppContainer = ({ name, history }) => {
  return (
    <div className="appcontainer_container">
      <div className="appcontainer_header_container">
        <Header />
      </div>
      <div className="appcontainer_body_container">
        <Sidebar side={'left'}/>
        <Sidebar2 history={history}/>
      </div>
    </div>
);
};

AppContainer.propTypes = {
    name: PropTypes.string,
    history: PropTypes.object
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
