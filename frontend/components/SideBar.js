import PropTypes from 'prop-types';
import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import SubmitPost from './SubmitPost';
import Login from './Login';
import Description from './Description';

const SideBar = ({ state, toggleLogin, loginUser, registerUser, toggleSignUp, logout }) => {
    return (
      <div style={{  position: 'fixed', top: 90, right: 0, width: '300px', border: '3px solid black', margin: 14}}>
        <SubmitPost />
        {(state.loggedIn.length >  0) ? <Button onClick={logout}>Log Out</Button>
        : (<Login modalOpen={toggleLogin} login={loginUser} register={registerUser} onSignUp={toggleSignUp} state={state}/>)}
        <Panel header={"Description"}>
          <Description description={state.description}/>
        </Panel>
      </div>
    );
};

SideBar.propTypes = {
    state: PropTypes.object,
    toggleLogin: PropTypes.func,
    loginUser: PropTypes.func,
    registerUser: PropTypes.func,
    toggleSignUp: PropTypes.func,
    logout: PropTypes.func

};

export default SideBar;
