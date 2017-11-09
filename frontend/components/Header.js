import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
