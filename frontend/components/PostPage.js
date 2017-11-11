import React from 'react';
import axios from 'axios';
import {TextField, RaisedButton} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      data: { title: 'loading', body: 'loading', id: '0', userId: '0', parentId: 1, children: [] },
    }
    this.handleVoteClick = this.handleVoteClick.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
  }

  componentDidMount() {
    axios.get(localStorage.getItem('webAddress') + '/api/post/' + this.props.postId)
    .then(resp => {
      this.setState({data: resp.data});
      console.log(resp.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitPost(postId) {
    axios.post(localStorage.getItem('webAddress') + '/api/post/' + (postId || this.props.postId), this.state)
    .then(resp => {
      console.log(resp);
      window.location.hash = '/';
    })
    .catch(err => {console.log(err)});
  }

  handleVoteClick(voteType, postId) {
    axios.get(localStorage.getItem('webAddress') + '/api/post/' + (postId || this.props.postId) + '/' + voteType)
    .then(resp => console.log(resp))
    .catch(resp => console.log(resp));
  }

  render() {
    const self = this;
    function traverse(parent) {
      if (!parent.children.length) {
        return;
      }
      return parent.children.map(child => {
        return (
          <div style={{marginLeft: '1.5em', border: '1px solid black'}} key={child.id}>
            <h4>{child.title} - <i>user {child.userId}</i></h4>
            <div className='vote-container' style={{display: 'inline', marginRight: '1em'}}>
            {child.votecount} 
              <IconButton style={{display: 'inline-block', width: '3em', marginRight: '1em'}}
                onClick={() => self.handleVoteClick('upvote', child.id)}
              >
                <KeyboardArrowUp />
              </IconButton>
              <IconButton style={{display: 'inline-block', width: '3em', marginRight: '1em'}}
                onClick={() => self.handleVoteClick('downvote', child.id)}
              >
                <KeyboardArrowDown />
              </IconButton>
            </div>
            {child.body} (id: {child.id})
            <br />
            <TextField name='title' onChange={(e) => self.handleInputChange(e)} hintText='Title' />
            <br />
            <TextField name='comment' onChange={(e) => self.handleInputChange(e)} hintText='Reply' multiLine={true} />
            <RaisedButton onClick={() => self.handleSubmitPost(post.id)} label='Reply' secondary={true} />
            {traverse(child)}
          </div>
        );
      });
    }

    return (
      <div className='container'>
        {this.state.comment}
        <h2>{this.state.data.title} - <i>user {this.state.data.userId}</i></h2>
        <p>{this.state.data.body} (postId: {this.state.data.id})</p>
        <div className='vote-container' style={{display: 'inline', marginRight: '1em', marginLeft: '1em'}}>
        {this.state.data.votecount} 
          <IconButton style={{display: 'inline-block', width: '3em', marginRight: '1em'}}
            onClick={() => this.handleVoteClick('upvote')}
          >
            <KeyboardArrowUp />
          </IconButton>
          <IconButton style={{display: 'inline-block', width: '3em', marginRight: '1em'}}
            onClick={() => this.handleVoteClick('downvote')}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>

        <TextField name='comment' onChange={this.handleInputChange.bind(this)} hintText='Comment' multiLine={true} />
        <RaisedButton onClick={() => this.handleSubmitPost()} label='Comment' primary={true} />
        {traverse(this.state.data)}
      </div>
    );

  }

}

export default NewPost;
