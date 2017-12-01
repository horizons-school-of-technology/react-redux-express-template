import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Button } from 'semantic-ui-react';


const SideBar = ({ name }) => {
    return (
      <div className="testSideBar">
        <div className="sideBarContainer">
          <Button inverted color='red' fluid="true">Submit</Button>

          <div className="loginRegister">
            <Button.Group fluid="true">
              <Button>Login</Button>
              <Button.Or />
              <Button positive>Register</Button>
            </Button.Group>
          </div>

          <div className="sideBarDescriptionTitle">
            <Header as='h2'>Description: </Header>
          </div>
          <hr />
          <div className="sideBarDescription">
            <span><Header sub>This is the front page of the internet. All that is found here
            is dog pictures and reactions to Stranger Things</Header></span>
          </div>
        </div>
      </div>
    );
};


SideBar.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};


export default connect(
    mapStateToProps,
)(SideBar);
