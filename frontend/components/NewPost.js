import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
    }

    submitPost() {
        axios.post('http://localhost:3000/post/new', {title: this.title.value, content: this.content.value}, {withCredentials: true})
        .then((response) => {
            // console.log("response", response.data.user);
            if(response.data.success) {
                console.log('hey');
                this.props.history.push('/');
            } else {
                console.log("post error", response.data.err);
            }
        })
        .catch((err) => {
            console.log("submit post request error", err);
        });
    }

    render() {
        return(
      <div>
        <label>Title</label><br/>
        <input type="text" name="title" placeholder="title" ref={(input) => { this.title = input; }}/><br/>
        <label>Post</label><br/>
        <textarea name="content" placeholder="content" ref={(input) => { this.content = input; }}/><br/>
        <Button bsStyle="success" onClick={() => this.submitPost()}>Submit Post</Button>
      </div>
        );
    }
}

NewPost.propTypes = {
    history: PropTypes.object,
};

export default NewPost;
