import React from 'react';
import styles from '../assets/stylesheets/sidebar.css'
import PropTypes from 'prop-types';
import { RaisedButton, Paper, FlatButton, Dialog, TextField } from 'material-ui';
import LoginIcon from 'material-ui/svg-icons/social/person';
import RegisterIcon from 'material-ui/svg-icons/social/person-add';
import SubmitPostIcon from 'material-ui/svg-icons/editor/border-color';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open_login: false,
      open_register: false,
      login_pass: "",
      login_user: "",
      register_pass: "",
      register_user: "",
    }
  }

  handleOpen_login(){
    this.setState({open_login: true});
  };

  handleClose_login(){
    this.setState({open_login: false});
    this.setState({
      login_pass: "",
      login_user: ""
    })
  };

  handleOpen_register(){
    this.setState({open_register: true});
  };

  handleClose_register(){
    this.setState({open_register: false});
    this.setState({
      register_pass: "",
      register_user: ""
    })
  };

  handleChangeUser_register(event){
    const target = event.target;
    const value = target.value;
    this.setState({
      register_user: value
    })
  }

  handleChangeUser_login(event){
    const target = event.target;
    const value = target.value;
    console.log(value);
    this.setState({
      login_user: value
    })
  }

  handleChangePass_register(event){
    const target = event.target;
    const value = target.value;
    this.setState({
      register_pass: value
    })
  }

  handleChangePass_login(event){
    const target = event.target;
    const value = target.value;
    this.setState({
      login_pass: value
    })
  }

  render() {
    const actions_login = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose_login.bind(this)}
      />,
      <FlatButton
        label="Login"
        primary={true}
        disabled={!(this.state.login_pass && this.state.login_user)}
        onClick={this.handleClose_login.bind(this)}
      />,
    ];
    const actions_register = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose_register.bind(this)}
      />,
      <FlatButton
        label="Register"
        primary={true}
        disabled={!(this.state.register_pass && this.state.register_user)}
        onClick={this.handleClose_register.bind(this)}
      />,
    ];
    if(this.props.side == "left") {
      return (
        <div className="sidebar_container">
        </div>
      );
    } else {
      return (
        <div className="sidebar_container">
          <div className="sidebar_content">
            <RaisedButton
              className="submit_post_button"
              icon={<SubmitPostIcon />}
              label="Submit Post"
              backgroundColor="black"
              labelColor="white"
            />
            <div className="login_register_button_container">
              <RaisedButton
                className="login_button"
                icon={<LoginIcon />}
                labelColor="#06d6a8"
                onClick={this.handleOpen_login.bind(this)}
                backgroundColor="white"
              />
              <RaisedButton
                className="register_button"
                icon={<RegisterIcon />}
                labelColor="white"
                onClick={this.handleOpen_register.bind(this)}
                backgroundColor="#06d6a8"
              />
            </div>
            <Paper className="description_right_container" zDepth={5}>
              <h1 className="right_sidebar_description_title">
                Description
              </h1>
              <p className="right_sidebar_description_content">
                This is the description of Steemit, an up and coming social media platform built on the Steem blockchain. Handling
                hundreds of thousands of transactions a day with 3 second confirmmations and no fee's, this is a blockchain you don't want
                to miss.
              </p>
            </Paper>
          </div>
          <div>
            <Dialog
              title="Login"
              actions={actions_login}
              modal={true}
              open={this.state.open_login}
            >
              <TextField
                hintText="Username"
                onChange={this.handleChangeUser_login.bind(this)}
              /> <br />
              <TextField
                hintText="Password"
                onChange={this.handleChangePass_login.bind(this)}
              />
            </Dialog>
          </div>

          <div>
            <Dialog
              title="Register"
              actions={actions_register}
              modal={true}
              open={this.state.open_register}
            >
              <TextField
                hintText="Username"
                onChange={this.handleChangeUser_register.bind(this)}
              /> <br />
              <TextField
                hintText="Password"
                onChange={this.handleChangePass_register.bind(this)}
              />
            </Dialog>
          </div>
        </div>
      );
    }
  }
}
