import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import { toggleModal } from '../actions/index';

class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onPasswordChange(evt) {
        evt.preventDefault();
        this.setState({
            password: evt.target.value
        });
    }

    onUsernameChange(evt) {
        evt.preventDefault();
        this.setState({
            username: evt.target.value
        });
    }

    render() {
        return (
          <Modal show={this.props.isModalOpen} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login/Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <label>Username</label>
                <input type="text" name="username" value = {this.state.username} onChange={(evt)=>this.onUsernameChange(evt)}/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" value = {this.state.password} onChange={(evt)=>this.onPasswordChange(evt)}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-primary">Register</button>
            </Modal.Footer>
          </Modal>);
    }
}

MyModal.propTypes = {
    isModalOpen: PropTypes.bool,
    closeModal: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeModal: ()=>{
        dispatch(toggleModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyModal);
