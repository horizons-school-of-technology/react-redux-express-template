import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

class AuthModal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRegister() {
        axios.post('http://localhost:3000/register', {username: this.username.value, password: this.password.value}, {withCredentials: true})
        .then((response) => {
          // console.log("response", response);
            if(response.data.success) {
                this.props.login(response.data.user);
                this.props.toggleLoginModal();
            } else {
                console.log("register redirect error", response.data.error);
            }
        })
        .catch((err) => {
            console.log("register post request error", err);
        });
    }

    handleLogin() {
        axios.post('http://localhost:3000/login', {username: this.username.value, password: this.password.value}, {withCredentials: true})
        .then((response) => {
            // console.log("response", response.data.user);
            if(response.data.success) {
                this.props.login(response.data.user);
                this.props.toggleLoginModal();
            } else {
                console.log("login redirect error", response.data.error);
            }
        })
        .catch((err) => {
            console.log("login post request error", err);
        });
    }

    render() {
        // console.log('this.props', this.props);
        return(
      <Modal
        show={this.props.isModalOpen}
        onHide={this.props.toggleLoginModal}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" name="username" placeholder="username" ref={(input) => { this.username = input; }}/>
          <input type="password" name="password" placeholder="password" ref={(input) => { this.password = input; }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleRegister()}>Register</Button>
          <Button onClick={() => this.handleLogin()}>Login</Button>
        </Modal.Footer>
      </Modal>
        );
    }
}

AuthModal.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    // username: PropTypes.string,
    // password: PropTypes.string,
    login: PropTypes.func,
};

export default AuthModal;
