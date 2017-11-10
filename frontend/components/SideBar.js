import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const SideBar = ( { toggleLoginModal, username } ) => {
    const handleLogout = () => {
        axios.get('http://localhost:3000/logout', {withCredentials: true})
        .then((response) => {
            console.log("response", response);
            // if(response.data.success) {
            //     this.props.login(response.data.user);
            // } else {
            //     console.log("login redirect error", response.data.error);
            // }
        })
        .catch((err) => {
            console.log("login post request error", err);
        });
    };

    return (
      <div>
        <div className="modal-container" style={{ height: 200 }}>
        {username.length > 0
          ? <div>
              <div>Welcome {username}</div>
              <Button onClick={handleLogout()}>Logout</Button>
            </div>
          : <Button bsStyle="primary" onClick={toggleLoginModal}>Login or Register</Button>
        }
      </div>
    </div>
    );
};

SideBar.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    username: PropTypes.string,
    logout: PropTypes.func,
};


export default SideBar;
