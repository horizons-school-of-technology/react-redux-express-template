import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import {toggleSaveUser} from '../actions/index'


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleLogin(e) {
    e.preventDefault();

    axios.post('/api/user/login', {
      password: this.password.value,
      username: this.username.value
    })
    .then((result) => {
      console.log('THIS IS THE USER!', result);
      this.props.saveUser(result.data.user);
      this.props.toggleModal();
    })
    .catch((err) => console.log(err))
  }



  toggleRegister(e){
    e.preventDefault();

    console.log(1);
    axios.post('/api/user/register', {
      password: this.password.value,
      username: this.username.value
    })
    .then((result) => {
      console.log(result);
      this.props.toggleModal()
      // this.props.saveUser(result)
    })
    .catch((err) => console.log(err))
  }


   render() {
   return (
      <div>
        <Button color='pink' onClick= {() => this.props.toggleModal()}>
          <Icon name='checkmark'/> Login/Register
        </Button>
        <Modal open={this.props.isModalOpen} closeOnDocumentClick= {true}>
              <p>Please enter credentials below:</p>
              <form action='/user/register' method='POST'>
              <input
                type="text"
                name='username'
                ref={(input) => { this.username = input; }}
                placeholder="Username"
              />
              <input
                  type="password"
                  name='password'
                  ref={(input) => { this.password = input; }}
                  placeholder="Password"
                />
                <Button onClick={(e) => this.toggleLogin(e)} color='green' inverted>
                  <Icon name='checkmark' /> Login
                </Button>
                <Button onClick={(e) => this.toggleRegister(e)} color='green' inverted>
                  <Icon name='checkmark' /> Register
                </Button>
                <Button onClick= {() => this.props.toggleModal()} color='red' inverted>
                  <Icon name='checkmark' /> Cancel
                </Button>
              </form>
          </Modal>
        </div>
    );
}};


Login.propTypes = {

};
const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      saveUser: (u) => {dispatch(toggleSaveUser(u))}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
