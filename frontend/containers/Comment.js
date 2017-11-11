var React = require('react');
import PropTypes from 'prop-types';
// var { Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
// var axios = require('axios');

// This assumes we are passing in posts
// Each post has: img (string url) and description


class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            hideChildren: true
        }
    }


    clickHandler() {
        this.setState({
            hideChildren: false
        })
    }

    render(){
      return (
        <div className="comment">
          <button type="button" className="btn" style={{margin: 5}}>
            <span className="glyphicon glyphicon-arrow-up"/>
          </button>
          <button type="button" className="btn" style={{margin: 5}}>
            <span className="glyphicon glyphicon-arrow-down"/>
          </button>
          <div>
            {this.props.comment.content.description}
          </div>
          <div onClick={()=>this.clickHandler()}>
            {this.state.children.length} comments
          </div>
          {this.state.hideChildren ? null :
            this.props.comment.children.map((comment) => {
                return (
                  <div className="commentHolder">
                      <Comment comment={comment}/>
                  </div>
                )
              })
            })
        </div>
      );
    }
};

Comment.propTypes = {
    comment: PropTypes.object,
};


export default Comment;
