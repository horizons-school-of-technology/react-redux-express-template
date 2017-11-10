import React from 'react';
import axios from 'axios';
import {TextField, RaisedButton} from 'material-ui';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      post: {title: 'TestTitle', body: 'TestBody'}, // object
    }
  }

  componentDidMount() {
    // console.log( this.props.postId );
    // axios.get(localStorage.getItem('webAddress') + '/api/post/' + this.props.postId)
    // .then(resp => {
    //   console.log('componentDidMount, GET post/:postId', resp);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitPost() {
    axios.post(localStorage.getItem('webAddress') + '/api/post/new', this.state)
    .then(resp => {
      console.log(resp);
      window.location.hash = '/'
    })
    .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className='NewPost-container'>
        <h1>{this.state.post.title} (id: {this.props.postId})</h1>
        <p>{this.state.post.body}</p>
        <br />
        <br />
        <TextField name='comment' onChange={this.handleInputChange.bind(this)} hintText='Comment' multiLine={true} />
        <br />
        <RaisedButton label='Choose Attachments' secondary={true} />
        <RaisedButton onClick={this.handleSubmitPost.bind(this)} label='Submit' primary={true} />
      </div>
    );
  }

}

export default NewPost;
