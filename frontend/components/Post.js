import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
