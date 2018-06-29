import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar2 from '../components/Sidebar2';

import styles from '../assets/stylesheets/appcontainer.css'

export default function AppContainer() {
  return (
    <div className="appcontainer_container">
      <div className="appcontainer_header_container">
        <Header />
      </div>
      <div className="appcontainer_body_container">
        <Sidebar2 side='left' />
        <Feed />
        <Sidebar2 side='right' />
      </div>
    </div>
  );
};
