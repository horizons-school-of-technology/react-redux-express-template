import React from 'react';
import { Button, Modal, Glyphicon } from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component {
    constructor(props)  {
        super(props);
        this.username = this.refs.username;
        this.password = this.refs.password;
        this.rPassword = this.refs.rPassword;
        this.state = {
            modalOpen: false,
            signUp: false
        };
    }
    modalOpen() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    onSignUp() {
        this.setState({
            signUp: true
        });
    }
    login() {
        axios.post('http://localhost:3000/api/login', {
            username: this.refs.username.value,
            password: this.refs.password.value
        }, {
          withCredentials: true
        })
      .then((resp) => {
          console.log(resp.data);
          this.setState({
              modalOpen: false
          }, () => this.props.onLogin());
      })
      .catch(err => {
          console.log(err);
      });
    }
    register() {
        axios.post('http://localhost:3000/api/register', {
            username: this.refs.username.value,
            password: this.refs.password.value,
            repeatPassword: this.refs.rPassword.value
        })
      .then((resp) => {
          this.setState({
              modalOpen: false,
              signUp: true
          }, this.onSignUp());
      })
      .catch(err => {
          console.log(err);
      });
    }

    render() {
      return (
        <div>
          <Button onClick={() => this.modalOpen()}>Login OR Register</Button>
          <Modal show={this.state.modalOpen} onHide={() => this.modalOpen()}>
            <Modal.Header closeButton>
              <Modal.Title>Hey Fam!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {(this.state.signUp) ? (
                <div>
                  <input type="text" ref="username" placeholder="username"/>
                  <input type="password" ref="password" placeholder="password" />
                  <input type="password" ref="rPassword" placeholder="repeat password" />
                </div>
              ) : (
                <div>
                  <input type="text" ref="username" placeholder="username"/>
                  <input type="password" ref="password" placeholder="password" />
                </div>
              )}

            </Modal.Body>

            <Modal.Footer>
              {(this.state.signUp) ? (
                <Button bsSize="small" bsStyle="primary" onClick={() => {
                    this.register();
                    this.onSignUp();
                }}><Glyphicon glyph="glyphicon glyphicon-plus" />Confirm</Button>
                ) : (
                  <div>
                    <Button bsSize="small" bsStyle="danger" onClick={() => this.modalOpen()}><Glyphicon glyph="glyphicon glyphicon-remove" /> Close</Button>
                    <Button bsSize="small" bsStyle="success" onClick={() => {
                        this.login();
                    }}><Glyphicon glyph="glyphicon glyphicon-ok" /> Login</Button>
                      <Button bsSize="small" bsStyle="primary" onClick={() => this.onSignUp()}><Glyphicon glyph="glyphicon glyphicon-plus" /> Sign Up</Button>
                    </div>
                  )}

                </Modal.Footer>

              </Modal>
            </div>
        );
    }
}


export default Login;
