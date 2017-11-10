import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(BACKEND);
    axios.post(BACKEND + '/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(resp => {
      console.log(resp.data);
      if (resp.status === 200) {
        this.props.history.push('/register');
      }
    })
    .catch(error => {
      console.log('Error Logging in:', error.response.data.message);
      this.setState({
        errorMessage: error.response.data.message
      });
    });
    event.preventDefault();
  }
  render() {
    return (
      <div id="login-page">
        <form id="login-form">
          <label>Username</label>
          <FormControl id="username-input" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <label>Password</label>
          <FormControl id="password-input" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <div id="form-buttons-bar">
            <button className="bottom-button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        <span>Already have an account? <Link to="/register">Register</Link></span>
      </div>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object
};

export default LoginForm;
