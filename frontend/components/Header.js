import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';


const Header = ( { name } ) => {
    return (
      <Navbar fixedTop={true}>
        {/* <Navbar.Header>
          <Navbar.Brand> */}
          <div style={{width: '100%', backgroundColor: 'lightBlue', padding:'0px', display: 'flex', height: '100px', alignItems: 'center'}}>
            <div style={{flex: 1, height:'100%', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
              <div>
                <img src="https://www.acquia.com/sites/default/files/reddit_logo.png" style={{height: '80', }}/>
              </div>
            </div>
            <div style={{flex: 6, fontSize: '50', color: 'white', textShadow: '2px 2px orange', fontFamily:"Arial, Sans-serif" }}>
              REDDIT
            </div>
          </div>

          {/* </Navbar.Brand>
        </Navbar.Header> */}
        {/* <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav> */}
      </Navbar>
    );
};

Header.propTypes = {
    // name: PropTypes.string,
};


export default Header;
