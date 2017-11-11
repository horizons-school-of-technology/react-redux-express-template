// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
//
// const Feed = ( { getPosts } ) => {
//     const componentDidMount = () => {
//         axios.get('http://localhost:3000/post/all', {withCredentials: true})
//         .then((response) => {
//             console.log("response", response);
//             if(response.data.success) {
//                 getPosts(response.data.posts);
//             } else {
//                 console.log("posts error", response.data.err);
//             }
//         })
//         .catch((err) => {
//             console.log("get posts error", err);
//         });
//     };
//
//     return (
//       <div>
//         <div>Post</div>
//         <div>Post</div>
//         <div>Post</div>
//         <div>Post</div>
//         <div>Post</div>
//         <div>Post</div>
//         <div>Post</div>
//       </div>
//     );
// };
//
// Feed.propTypes = {
//     getPosts: PropTypes.func,
// };
//
//
// export default Feed;

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/post/all', {withCredentials: true})
        .then((response) => {
            console.log("response", response);
            if(response.data.success) {
                this.props.getPosts(response.data.posts);
            } else {
                console.log("posts error", response.data.err);
            }
        })
        .catch((err) => {
            console.log("get posts error", err);
        });
    }

    render() {
        console.log(this.props.posts, 'here in feed with the posts!!!!!!!!');
        return(
      <div>
        Hello Posts
        {this.props.posts.map((elem) => <li>{elem.title} - {elem.content} by {elem.userId} at {elem.createdAt}</li>)}
      </div>
        );
    }
}

Feed.propTypes = {
    getPosts: PropTypes.func,
    posts: PropTypes.array,
};

export default Feed;
