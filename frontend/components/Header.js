import React from 'react';
import styles from '../assets/stylesheets/header.css'
import Paper from 'material-ui/Paper';

export default function Header() {
  return (
    <div className="header_container">
      <Paper
        className="header_content"
        zDepth={4}
        >
        <img className="header_container_logo" src="https://steemitimages.com/0x0/0x0/https://steemitimages.com/DQmX2GQsxyaVnqaEFgYygvB6ABUXbpKSsRCupdXu5onAt9y/2017-11-01%2006.28.27.jpg"/>
        <h1 className="header_container_title">steemit</h1>
      </Paper>
    </div>
  );
};
