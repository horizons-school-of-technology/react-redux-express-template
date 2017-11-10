import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SubmitPost = ({ }) => {
    return (
        <Button>SubmitPost</Button>
    );
};

SubmitPost.propTypes = {
    modalOpen: PropTypes.func
};


export default SubmitPost;
