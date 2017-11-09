import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Feed />
        <Sidebar />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
