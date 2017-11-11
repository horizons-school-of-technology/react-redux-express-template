var React = require('react');
// var { Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
var axios = require('axios');
import Comment from './Comment';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';


// This assumes we are passing in posts
// Each post has: img (string url) and description


class PostPage extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {}
        };
    }

    componentDidMount() {

        console.log(this.props.match.params.id, 'ID parameter');
        axios.get(`http://localhost:3000/api/post/`+ this.props.match.params.id,
           {
            withCredentials: true
          })
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
          <div>
            <Header />
            <Sidebar />
            <div className="postContent">
                <div className="postHeader">
                  <button type="button" className="btn" style={{margin: 5}}>
                    <span className="glyphicon glyphicon-arrow-up"/>
                  </button>
                  <button type="button" className="btn" style={{margin: 5}}>
                    <span className="glyphicon glyphicon-arrow-down"/>
                  </button>
                  <div>{this.state.post.title}</div>
                </div>
                <div>
                  <div><img src={this.state.post.img} style={{width: '300px'}}/></div>
                  <div>{this.state.post.description}</div>
                  {/* <div className="postBody">
                    {this.state.post.children.map((comment) => {
                      return(
                        <div className="commentHolder">
                          <Comment comment={comment}/>
                        </div>
                      )
                    })}
                  </div> */}
                </div>
            </div>
          </div>
        );
    }
  }

export default PostPage;
