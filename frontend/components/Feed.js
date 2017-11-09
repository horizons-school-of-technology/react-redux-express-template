import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
