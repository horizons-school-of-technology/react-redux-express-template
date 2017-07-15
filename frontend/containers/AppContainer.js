import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Title from '../components/Title';
import ChatRoom from '../components/ChatRoom';

const AppContainer = ({ name }) => {
  var defaultUsername = "Guest"+Math.round(Math.random()*100);
  return (
    <div>
      <Title name={name} />

      {/*test chatroom*/}

      <ChatRoom grade={5} subject={"Physics"} username={defaultUsername}/>
    </div>
  );
}


AppContainer.propTypes = {
  name: PropTypes.string,
};

export default AppContainer;
