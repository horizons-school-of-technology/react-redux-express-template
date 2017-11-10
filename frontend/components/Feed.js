import React from 'react';
import PropTypes from 'prop-types';

const Feed = ( { } ) => {
    return (
      <div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
      </div>
    );
};

Feed.propTypes = {
    name: PropTypes.string,
};


export default Feed;
