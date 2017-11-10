import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: ''
        };
    }

    componentWillMount() {
        axios.get('/api/post/all')
        .then((response)=>{
            this.setState({
                posts: response.data.posts
            });
        })
        .catch((err)=>{
            this.setState({
                error: "Error: " + err
            });
        });
    }

    render() {
        return (
            <div className="feed">
              {this.state.error ? <p>{this.state.error}</p> : ''}
              {this.state.posts.map((post)=>(
                <div className = "postContainer" key={post.id}>
                  <div className="postInfo">
                    <h3>{post.title}</h3>
                    <p>{post.createdAt}</p>
                    <p>{post.content}</p>
                  </div>
                  <div className="postViewButton">
                    <Link to={`/post/${post.id}`}>
                      <button>View</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
        );
    }
}

Feed.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
