import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../assets/stylesheets/feed.css'
import {Paper, RaisedButton} from 'material-ui';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(localStorage.getItem('webAddress') + '/api/post/all')
    .then(resp => {
      console.log(resp); // TODO: add voteCounts to this GET route
      this.setState({
        posts: resp.data.posts
      });
    });
  }

  render() {
    return (
      <div className="feed_container">
        <Paper
          className="feed_body"
          zDepth={2}
        >
          <h1 style={{paddingTop: '1em'}}>All posts</h1>
          {this.state.posts.map(post => {
            return (
              <div key={post.id}>
                <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
                <p>{post.body}</p>
              </div>
            );
          })}
        </Paper>
      </div>
    );
  }
}

export default Feed;
