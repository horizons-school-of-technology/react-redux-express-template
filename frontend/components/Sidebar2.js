import React from 'react';
import styles from '../assets/stylesheets/sidebar.css'
import PropTypes from 'prop-types';
import { RaisedButton, Paper, FlatButton, Dialog, TextField } from 'material-ui';
import LoginIcon from 'material-ui/svg-icons/social/person';
import RegisterIcon from 'material-ui/svg-icons/social/person-add';
import SubmitPostIcon from 'material-ui/svg-icons/editor/border-color';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/api/user';

export default class Sidebar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: null,
      username: "",
      password: "",
    }
  }

  handleSubmit() {
    const endUrl = modalType === 'login' ? '/login' : 'register' ? '/register' : null;
    axios({
      url: baseUrl + endUrl,
      method: 'post',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
  }

  handleOpenModal(){
    this.setState({modalIsOpen: true});
  }

  handleCloseModal(){
    this.setState({modalIsOpen: false});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    const actions_login = [
      <FlatButton
        label="Cancel"
        primary={true}
      />,
      <FlatButton
        label="Submit"
        primary={true}
      />,
    ];
    if (this.props.side == "left") {
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
                onClick={(e) => this.handleOpenModal.bind(this, e)}
                backgroundColor="white"
              />
              <RaisedButton
                className="register_button"
                icon={<RegisterIcon />}
                labelColor="white"
                onClick={(e) => {
                  console.log(e.target);
                  this.handleOpenModal.bind(this, e)}
                }
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
              open={this.state.modalIsOpen}
            >
              <TextField
                hintText="Username"
                onChange={this.handleInputChange.bind(this)}
              /> <br />
              <TextField
                hintText="Password"
                onChange={this.handleInputChange.bind(this)}
              />
            </Dialog>
          </div>
        </div>
      );
    }
  }
}
