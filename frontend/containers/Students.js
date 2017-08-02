import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import actions from '../actions/index';
import { Redirect } from 'react-router';


class Students extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        if (!this.props.token) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <h1>
                    Welcome to CramBerry !!!
                </h1>
                <RaisedButton onClick={(e) => {this.onLogout(e)}}>Logout</RaisedButton>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.reducer.token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.logout());
        }
    }
}

Students = connect(mapStateToProps, mapDispatchToProps)(Students);

export default Students;
