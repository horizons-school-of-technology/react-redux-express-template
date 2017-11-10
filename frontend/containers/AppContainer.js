import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import Header from '../components/Header';

const AppContainer = ({ name }) => {
  return (
        <div>
          <Header name={name} />
          <Posts />
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
