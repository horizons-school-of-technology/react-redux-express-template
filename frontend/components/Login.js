import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {toggleLoginAction, closeLoginAction} from '../actions/index'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const Login = ( { isModalOpen, toggleLogin, closeLogin, toggleModal } ) => {
    return (
      <div>
      <Button color='pink' onClick= {() => toggleModal()}>
      <Icon name='checkmark'/> Login/Register
      </Button>
        <Modal open={isModalOpen} closeOnDocumentClick= {true}>
              <p>Please enter credentials below:</p>
              <form action='/user/register' method='POST'>
              <input
                type="text"
                name='username'
                placeholder="Username"
              />
              <input
                  type="password"
                  name='password'
                  placeholder="Password"
                />
                <Button onclick={() => toggleLogin()} color='green' inverted>
                  <Icon name='checkmark' /> Login
                </Button>
                <Button onclick={() => toggleLogin()} color='green' inverted>
                  <Icon name='checkmark' /> Register
                </Button>
                <Button onClick= {() => closeLogin()} color='red' inverted>
                  <Icon name='checkmark' /> Cancel
                </Button>
              </form>
          </Modal>
          </div>
    );
};

Login.propTypes = {

};

const mapStateToProps = (state) => {
    return {
    isModalOpen: state.isModalOpen
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
      toggleLogin: () => {dispatch(toggleLoginAction())},
      toggleRegister: () => {dispatch(toggleRegisterAction())},
      closeLogin: () => {dispatch(closeLoginAction())},
      toggleModal: () => {dispatch(toggleModalAction())}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
