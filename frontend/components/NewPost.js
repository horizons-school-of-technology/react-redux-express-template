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
    axios.post('http://localhost:3000/api/post/new', this.state)
    .then(resp => {
      console.log(resp);
      window.location.hash = '/'
    })
    .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className='NewPost-container'>
        {this.state.title}, {this.state.body}
        <br />
        <TextField name='title' onChange={this.handleInputChange.bind(this)} hintText='Post Title' />
        <br />
        <TextField name='body' onChange={this.handleInputChange.bind(this)} hintText='Post Body' multiLine={true} />
        <br />
        <RaisedButton label='Choose Attachments' secondary={true} />
        <RaisedButton onClick={this.handleSubmitPost.bind(this)} label='Submit' primary={true} />
      </div>
    );
  }
}

export default NewPost;
