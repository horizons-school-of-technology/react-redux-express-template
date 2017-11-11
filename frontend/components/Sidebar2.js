import React from 'react';
import styles from '../assets/stylesheets/sidebar.css'
import { connect } from 'react-redux';
import { RaisedButton, Paper, FlatButton, Dialog, TextField } from 'material-ui';
import LoginIcon from 'material-ui/svg-icons/social/person';
import RegisterIcon from 'material-ui/svg-icons/social/person-add';
import SubmitPostIcon from 'material-ui/svg-icons/editor/border-color';
import axios from 'axios';
const baseUrl = localStorage.getItem('webAddress') + '/api/user';

class Sidebar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalTitle: null,
      username: "",
      password: "",
      user: null,
    }
  }

  handleSubmitUser() {
    const endUrl = this.state.modalTitle === 'Login' ? '/login' : '/register';
    axios.post(baseUrl + endUrl, this.state)
    .then(resp => {
      this.setState({modalIsOpen: false, user: resp.data.user});
      this.props.login(resp.data.user);
    })
    .catch(err => {
      console.log(`err with ${endUrl}: ${err}`);
    });
  }

	handleInputChange(key) {
		return (e) => {
			const state = {};
			state[key] = e.target.value;
			this.setState(state);
		};
	}

  render() {
    const actionButtons = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.setState({modalIsOpen: false})}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmitUser.bind(this)}
      />,
    ];
    if (this.props.side == "right") {
      return (
        <div className="sidebar_container">
          <div className="sidebar_content">
            <RaisedButton
              className="submit_post_button"
              icon={<SubmitPostIcon />}
              label="Submit Post"
              backgroundColor="black"
              labelColor="white"
              onClick={() => this.state.user ?
                window.location.hash = '/post/new' :
                this.setState({modalIsOpen: true, modalTitle: 'Login'})
              }
            />
            {
              this.state.user ?
              <div>
                <h1>{this.state.username}</h1>
                <RaisedButton
                  className="logout_button"
                  label="logout"
                  labelColor="#06d6a8"
                  onClick={() => axios.get(baseUrl + '/logout').then(() => this.setState({user: null}))}
                  backgroundColor="white"
                />
              </div> :
              <div className="login_register_button_container">
                <RaisedButton
                  className="login_button"
                  icon={<LoginIcon />}
                  labelColor="#06d6a8"
                  label='login'
                  onClick={() => this.setState({modalIsOpen: true, modalTitle: 'Login'})}
                  backgroundColor="white"
                />
                <RaisedButton
                  className="register_button"
                  icon={<RegisterIcon />}
                  labelColor="white"
                  label='register'
                  onClick={() => this.setState({modalIsOpen: true, modalTitle: 'Register'})}
                  backgroundColor="#06d6a8"
                />
            </div>
            }
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
              title={this.state.modalTitle}
              actions={actionButtons}
              open={this.state.modalIsOpen}
            >
              <TextField
                hintText="Username"
                name={this.state.username}
                onChange={this.handleInputChange('username')}
              />
              <TextField
                hintText="Password"
                name={this.state.password}
                onChange={this.handleInputChange('password')}
              />
            </Dialog>
          </div>
        </div>
      );
    } else {
      return (
        <div className="sidebar_container">
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch({type: 'USER', user}),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar2);
