// import React from 'react';
// import PropTypes from 'prop-types';
// // import { Button } from 'react-bootstrap';
// import axios from 'axios';
//
// class PostPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             post: {}
//         };
//     }
//
//     componentDidMount() {
//         // console.log('this', this.props.location.pathname);
//         axios.get(`http://localhost:3000${this.props.location.pathname}`, {withCredentials: true})
//         .then((response) => {
//             console.log("response", response);
//             if(response.data.success) {
//                 this.setState({
//                     post: response.data.post
//                 });
//             } else {
//                 console.log("posts error", response.data.err);
//             }
//         })
//         .catch((err) => {
//             console.log("get posts error", err);
//         });
//     }
//
//     render() {
//         console.log(this.state);
//         return(
//       <div>
//         <h1>{this.state.post.title}</h1>
//         <p>{this.state.post.createdAt}</p>
//         <h4>{this.state.post.content}</h4>
//       </div>
//         );
//     }
// }
//
// PostPage.propTypes = {
//     history: PropTypes.object,
//     location: PropTypes.object,
// };
//
// export default PostPage;

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const PostPage = ({ history }) => {
    console.log('history is', history);
    return (
        <div>
          hi
        </div>
    );
};

PostPage.propTypes = {
    history: PropTypes.object,
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        // isModalOpen: state.toggleLoginModal.isModalOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoginModal: () => {
            dispatch(actions.toggleLoginModal());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);
