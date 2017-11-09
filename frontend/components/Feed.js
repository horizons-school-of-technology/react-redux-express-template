import React from 'react';
import styles from '../assets/stylesheets/feed.css'
import Paper from 'material-ui/Paper';

const Feed = () => {
    return (
      <div className="feed_container">
        <Paper
          className="feed_body"
          zDepth={2}
        />
      </div>
    );
};

export default Feed;
