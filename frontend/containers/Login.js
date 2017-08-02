import React, {Component} from 'react';
import actions from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      register: false
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  usernameChange(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }
  passwordChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }
  onLogin(e) {
    e.preventDefault();
    console.log('button clicked')
    axios.post('http://localhost:3000/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      if (res.data.success) {
        console.log('received from backend')
        this.props.login(res.data.user, res.data.token);
      }
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
  }
  onRegister(e) {
    e.preventDefault();
    this.setState({
      register: true
    });
  }

  render() {
    // console.log('im in login');
    // console.log('token', this.props.token);
    //
    if (this.props.token) {
        console.log('redirecting to students')
      return <Redirect to='/students' />;
    }
    if (this.state.register) {
      return <Redirect to='/register' />;
    }
    return (
      <div style={CSSstyles.container}>
          <h2> Login </h2>
        <div>
          <form onSubmit={(e) => {this.onLogin(e)}}>
            <TextField
              hintText=""
              floatingLabelText="Username"
              value={this.state.username}
              onChange={(e) => {this.usernameChange(e)}}
            /><br />
            <TextField
              hintText=""
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              onChange={(e) => {this.passwordChange(e)}}
            /><br />
            <RaisedButton type='submit' label="Login" primary={true} style={JSstyles.submit} />
            <RaisedButton label="Register" secondary={true} style={JSstyles.submit} onClick={(e) => {this.onRegister(e)}} />
          </form>
        </div>
      </div>
    );
  }



}

const mapStateToProps = (state) => {
  return {
    token: state.reducer.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(actions.login(username, password))
    }
  };
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;

const JSstyles = {
  submit: {
    margin: 12,
  }
};

const CSSstyles = {
    container: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 100
    }
};
