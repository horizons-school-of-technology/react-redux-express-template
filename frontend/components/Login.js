import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Glyphicon } from 'react-bootstrap';

let username = '';
let password = '';
let rPassword = '';

function onUsernameChange(e) {
    username = e.target.value;
}
function onPasswordChange(e) {
    password = e.target.value;
}
function onRPasswordChange(e) {
    rPassword = e.targat.value;
}

const Login = ({ modalOpen, state, login, register, onSignUp }) => {
    return (
    <div>
      <Button onClick={modalOpen}>Login OR Register</Button>
      <Modal show={state.isModalOpen} onHide={() => modalOpen()}>
        <Modal.Header closeButton>
          <Modal.Title>Hey Fam!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {(state.signUp) ? (
            <input type="password" onChange={(e) => onRPasswordChange(e)} placeholder="repeat password" name="rPassword"/>
          ) : (
            <div>
            <input type="text" onChange={(e) => onUsernameChange(e)} placeholder="username" name="username"/>
            <input type="password" onChange={(e) => onPasswordChange(e)} placeholder="password" name="password"/>
            </div>
          )}

        </Modal.Body>

        <Modal.Footer>
          {(state.signUp) ? (
            <Button bsSize="small" bsStyle="primary" onClick={() => register(username, password, rPassword)}><Glyphicon glyph="glyphicon glyphicon-plus" />Confirm</Button>
          ) : (
            <div>
            <Button bsSize="small" bsStyle="danger" onClick={modalOpen}><Glyphicon glyph="glyphicon glyphicon-remove" /> Close</Button>
            <Button bsSize="small" bsStyle="success" onClick={() => login(username, password)}><Glyphicon glyph="glyphicon glyphicon-ok" /> Login</Button>
            <Button bsSize="small" bsStyle="primary" onClick={onSignUp}><Glyphicon glyph="glyphicon glyphicon-plus" /> Sign Up</Button>
          </div>
          )}


        </Modal.Footer>

      </Modal>
    </div>
    );
};

Login.propTypes = {
    state: PropTypes.object,
    modalOpen: PropTypes.func,
    login: PropTypes.func,
    register: PropTypes.func,
    onSignUp: PropTypes.func
};


export default Login;
