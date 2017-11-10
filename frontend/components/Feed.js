import React from 'react';
import PropTypes from 'prop-types';

const Feed = ( { name } ) => {
    return (
        <h1>Feed goes here</h1>
    );
};

Feed.propTypes = {
    name: PropTypes.string,
};


export default Feed;
