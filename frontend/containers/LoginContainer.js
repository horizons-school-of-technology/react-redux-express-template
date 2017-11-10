import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Login from '../components/Login.js';
import Register from '../components/Register.js';

const LoginContainer = () => {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
};

LoginContainer.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
