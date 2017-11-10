import React from 'react';
import styles from '../assets/stylesheets/feed.css'
import Paper from 'material-ui/Paper';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/post/all")
    .then(resp => {
      this.setState({
        posts: resp.data.posts
      })
    })
  }

  render() {
    return (
      <div className="feed_container">
        <Paper
          className="feed_body"
          zDepth={2}
        >
          <h1>All posts</h1>
          {this.state.posts.map(x => {
            return (
              <div key={x.id}><h1>{x.title}</h1><p>{x.body}</p></div>
            );
          })}
        </Paper>
      </div>
    );
  }
}

export default Feed;
