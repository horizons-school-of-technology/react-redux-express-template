import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {TextField, RaisedButton} from 'material-ui';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
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
    console.log(this.state);
    axios.post('http://localhost:3000/api/user/post/new', this.state)
    .then(resp => {
      console.log(resp);
      window.location.hash = '/'
    })
    .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className='NewPost-container'>
        <TextField name='title' onChange={this.handleInputChange} hintText='Post Title' />
        <TextField name='body' onChange={this.handleInputChange} hintText='Post Body' multiLine={true} />
        <br />
        <RaisedButton label='Choose Attachments' secondary={true} />
        <br />
        <RaisedButton onClick={this.handleSubmitPost} label='Submit' primary={true} />
        <br />
      </div>
    );
  }
}

export default NewPost;
