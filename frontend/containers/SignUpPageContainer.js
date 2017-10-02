import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class SignUpPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  updateEmail(event){
    this.setState({email: event.target.value});
  }

  updatePassword(event){
    this.setState({password: event.target.value});
  }

  signup() {
            // Send a POST request
        console.log(this.state.email)
        console.log(this.state.password)
        axios({
          method: 'post',
          url: 'http://localhost:3000/account/signup',
          data: {
            email: this.state.email,
            password: this.state.password
          }
        });
  }
  render() {
    return(
      <div>
        <h2>SignUp</h2>
        <div>
          <input
           type="text"
           value={this.state.email}
           placeholder="email"
           onChange={(event) => this.updateEmail(event)}
          />
          <br />
          <input
           type="text"
           value={this.state.password}
           placeholder="password"
           onChange={(event) => this.updatePassword(event)}
          />
          <br />
          <button
          type="button" onClick={() => this.signup()}>
          Sign Up!
          </button>
        </div>
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
