import React, {Component} from 'react'
import { connect } from 'react-redux';

class SignUpPageContainer extends Component {
  render() {
    return(
      <div>
        <h1>SignUp</h1>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return{
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPageContainer);
