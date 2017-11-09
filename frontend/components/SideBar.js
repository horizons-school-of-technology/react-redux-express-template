import PropTypes from 'prop-types';
import React from 'react';
import { ButtonGroup, ButtonToolbar, Panel} from 'react-bootstrap';
import SubmitPost from './SubmitPost';
import Login from './Login';
import Description from './Description';

const SideBar = ({ state, toggleLogin, loginUser, registerUser, toggleSignUp }) => {
    return (
      <div>
        <Panel>
          <ButtonToolbar>
          <SubmitPost />
          <ButtonGroup>
            <Login modalOpen={toggleLogin} login={loginUser} register={registerUser} onSignUp={toggleSignUp} state={state}/>
          </ButtonGroup>
        </ButtonToolbar>
          <Panel header={"Description"}>
            <Description description={state.description}/>
          </Panel>
        </Panel>
      </div>
    );
};

SideBar.propTypes = {
    state: PropTypes.object,
    toggleLogin: PropTypes.func,
    loginUser: PropTypes.func,
    registerUser: PropTypes.func,
    toggleSignUp: PropTypes.func

};

export default SideBar;
