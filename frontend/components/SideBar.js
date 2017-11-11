import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const SideBar = ( { toggleLoginModal, username, logout, history } ) => {
    const handleLogout = () => {
        axios.get('http://localhost:3000/logout', {withCredentials: true})
        .then((response) => {
            console.log("response", response);
            if(response.data.success) {
                logout();
            } else {
                console.log("logout redirect error", response.data.err);
            }
        })
        .catch((err) => {
            console.log("logout get request error", err);
        });
    };

    const handleSubmitPost = () => {
        if(username.length > 0) {
            console.log('hello user', history);
            history.push('/post/new');
        } else {
            toggleLoginModal();
        }
    };

    return (
      <div>
        <div className="modal-container" style={{ height: 200 }}>
        {username.length > 0
          ? <div>
              <div>Welcome {username}</div>
              <Button onClick={handleLogout}>Logout</Button>
              {/* <Link to="/post/new">New Post</Link> */}
            </div>
          : <Button bsStyle="primary" onClick={toggleLoginModal}>Login or Register</Button>
        }
      </div>
      <Button onClick={() => handleSubmitPost()}>NEW POST</Button>
    </div>
    );
};

SideBar.propTypes = {
    isModalOpen: PropTypes.bool,
    toggleLoginModal: PropTypes.func,
    username: PropTypes.string,
    logout: PropTypes.func,
    history: PropTypes.object,
};


export default SideBar;
