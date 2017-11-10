import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import { toggleModal, setUsername } from '../actions/index';
import axios from 'axios';

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            message: '',
            isModalOpen: this.props.isModalOpen
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isModalOpen: newProps.isModalOpen
        });
    }

    onFieldChange(evt, field) {
        evt.preventDefault();
        var newState = Object.assign({}, this.state);
        newState[field] = evt.target.value;
        this.setState(newState);
    }

    async onLogin() {
        var message;
        try{
            await axios.post('/api/login', {
                username: this.state.username,
                password: this.state.password
            });
            message = "Login Success.";
            this.props.setUsername(this.state.username);
        } catch(err) {
            console.log(err);
            message = err.response.data.error;
            this.setState({
                message,
                username: "",
                password: "",
                password2: ""
            });
        }
    }

    async onRegister() {
        var message;
        try{
            await axios.post('/api/register', this.state);
            message = "New account registered.";
        } catch(err) {
            message = err.response.data.error;
        }
        this.setState({
            message,
            password2: ""
        });
    }

    render() {
        return (
          <Modal show={this.state.isModalOpen} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login/Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalMessage">
                <p>{this.state.message}</p>
              </div>
              <div>
                <label>Username</label>
                <input type="text" name="username" value = {this.state.username} onChange={(evt)=>this.onFieldChange(evt, 'username')}/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" value = {this.state.password} onChange={(evt)=>this.onFieldChange(evt, 'password')}/>
              </div>
              <div>
                <label>Retype Password (if registering new account)</label>
                <input type="password" name="password2" value = {this.state.password2} onChange={(evt)=>this.onFieldChange(evt, 'password2')}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-primary" onClick={()=>this.onLogin()}>Login</button>
              <button className="btn btn-primary" onClick={()=>this.onRegister()}>Register</button>
            </Modal.Footer>
          </Modal>);
    }
}

MyModal.propTypes = {
    isModalOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    setUsername: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeModal: ()=>{
        dispatch(toggleModal());
    },
    setUsername: (username)=>{
        dispatch(setUsername(username));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyModal);
