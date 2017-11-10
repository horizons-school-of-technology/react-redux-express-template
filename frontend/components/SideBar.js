import PropTypes from 'prop-types';
import React from 'react';
import { Panel, Grid, Row, Col} from 'react-bootstrap';
import SubmitPost from './SubmitPost';
import Login from './Login';
import Description from './Description';

const SideBar = ({ state, toggleLogin, loginUser, registerUser, toggleSignUp }) => {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={3} xsOffset={9}><SubmitPost /></Col>
          </Row>
          <Row>
            <Col xs={3} xsOffset={9}><Login modalOpen={toggleLogin} login={loginUser} register={registerUser} onSignUp={toggleSignUp} state={state}/>
            </Col>
          </Row>
          <Row>
            <Col xs={3} xsOffset={9}><Panel header={"Description"}>
            <Description description={state.description}/>
            </Panel>
          </Col>
          </Row>
        </Grid>
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
