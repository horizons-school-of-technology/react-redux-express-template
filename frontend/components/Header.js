import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ( { name } ) => {
  return (
    <Navbar fixedTop={true} fluid={true} style={{padding: '0px', margin: '0px'}}>
      {/* <Navbar.Header>
        <Navbar.Brand> */}
        <div style={{width: '100%', backgroundColor: 'lightBlue', padding:'0px', display: 'flex', height: '100px', alignItems: 'center'}}>
          <div style={{flex: 1, height:'100%', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
            <div>
              <img src="https://www.acquia.com/sites/default/files/reddit_logo.png" style={{height: '80px', }}/>
            </div>
          </div>
          <div style={{
            flex: 4, fontSize: '50px', color: 'white', textShadow: '2px 2px orange', fontFamily:"Arial, Sans-serif",
            backgroundImage: "http://pic.templetons.com/brad/pano/sfba/best-treas.jpg", backgroundHeight: '100px'
          }}>
            R/ HORIZONS
          </div>
          <div className="headerContent" style={{flex: 5}}>
            {/* <Nav> */}
              {/* <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem> */}
              {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav> */}
          </div>
        </div>

        {/* </Navbar.Brand>
        </Navbar.Header> */}

      </Navbar>
    );
  };

  Header.propTypes = {
    name: PropTypes.string,
  };


  export default Header;
