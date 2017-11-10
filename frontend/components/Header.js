import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router'

// const styles {
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
//   picture: {
//     width: "10%",
//     fontSize: 15
//   }
// };
//
const Header = ( { name } ) => {
    return (
      <header as='h1' style = {{display: 'flex', border: 'solid'}}>
        <img style= {{width: 90, height: 70}} src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1280px-Reddit_logo_and_wordmark.svg.png"/>
        <h1 style = {{fontSize: 20, alignSelf: 'flex-end'}}>Front Page </h1>
        </header>
    );
};

Header.propTypes = {
    name: PropTypes.string,
};


export default Header;
