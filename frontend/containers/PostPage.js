var React = require('react');
// var { Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
var axios = require('axios');
import PropTypes from 'prop-types';
import Comment from './Comment';


// This assumes we are passing in posts
// Each post has: img (string url) and description


class PostPage extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/get/:post_id')
        .then((comments) => {
            console.log(comments.data);
            this.setState({
                post: comments.data.postContents
            });
        })
        .catch(e => {
            console.log(e);
        });
    }
    render() {
        return (
            <div className="postContent">
                <div className="postHeader">
                  <button type="button" className="btn" style={{margin: 5}}>
                    <span className="glyphicon glyphicon-arrow-up"/>
                  </button>
                  <button type="button" className="btn" style={{margin: 5}}>
                    <span className="glyphicon glyphicon-arrow-down"/>
                  </button>
                  <div>{this.props.post.title}</div>
                </div>
                <div>
                  <div><img src="{this.props.post.img}"/></div>
                  <div>{this.props.post.description}</div>
                  <div className="postBody">
                    {this.state.post.children.map((comment) => {
                      return(
                        <div className="commentHolder">
                          <Comment comment={comment}/>
                        </div>
                      )
                    })}
                  </div>
                </div>
            </div>
        );
    }
  }

PostPage.propTypes = {
    post: PropTypes.object,
};


export default PostPage;
