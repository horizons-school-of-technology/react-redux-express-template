import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../components/Post';

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [{
        id: 1,
        message: 'hi',
        createdAt: '2017-11-09T11:47:24.677-08:00',
        updatedAt: '2017-11-09T11:47:24.677-08:00',
        userId: 12,
        parentId: null,
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post =>
          <Post
            id={post.id}
            message={post.message}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            userId={post.userId}
            parentId={post.parentId}
          />
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
