import React from 'react';
import PropTypes from 'prop-types';


const SubmitPost = ( { name } ) => {
    return (
        <div>
        <button
        style={{margin: '10px 10px 10px 0'}}
        >Submit Post
        </button>
        </div>
    );
};

SubmitPost.propTypes = {
    name: PropTypes.string,
};


export default SubmitPost;
