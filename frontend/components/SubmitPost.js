import React from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';

class SubmitPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    newPostPage() {
        this.setState({
            redirect: true
        });
    }
    render() {
        return (
          <div>
            {
              (this.state.redirect) ? (<Redirect to="/post/new"/>)
              : (<Button onClick={() => this.newPostPage()}>SubmitPost</Button>)
            }
          </div>
        );
    }
}


export default SubmitPost;
