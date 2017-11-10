import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            message: ''
        };
    }

    async makePost() {
        try {
            await axios.post('/post/new', { title: this.state.title, content: this.state.content} );
            this.props.history.push('/');
        } catch (e) {
            this.setState({
                message: 'Error making post'
            });
        }
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    onContentChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return (
          <div className="newpost">
            {this.state.message ? <div>ERROR: {this.state.message}</div> : null }
            <div>Title</div>
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.onTitleChange(e)} />
            <div>Content</div>
            <textarea type="text" name="content" value={this.state.content} onChange={(e) => this.onContentChange(e)} />
            <button onClick={() => this.makePost()}>Make Post</button>
          </div>
        );
    }
}

export default NewPost;
