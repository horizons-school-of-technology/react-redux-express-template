var React = require('react');
var { Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
var axios = require('axios');
// This assumes we are passing in posts
// Each post has: img (string url) and description
let posts = [{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
description: "This is what humans call a 'moose' "},
{img: 'http://i.telegraph.co.uk/multimedia/archive/02622/geese_2622145b.jpg',
description: "This is what humans call 'geese'.  The singular term is 'goose'. They are notorious for pooping in groups over the skies."}]

class Feed extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/post/all')
    .then((posts) => {
      this.setState({
        posts: posts
      })
    })
    .catch(e => {
      console.log(e);
    })
  }
    render() {
      return (
        <div style={{paddingTop: 100}}>
          {
            posts.map((post) => {
                return (
                <div>
                  <Col componentClass={ControlLabel} sm={7}>
                    <div style={{ border: '2px solid #a1a1a1', borderRadius: '25px', padding: 15}}>
                      <button type="button" className="btn" style={{margin: 5}}>
                        <span className="glyphicon glyphicon-arrow-up"/>
                      </button>
                      <button type="button" className="btn" style={{margin: 5}}>
                        <span className="glyphicon glyphicon-arrow-down"/>
                      </button>
                      <img src={post.img} height="50" width="50"/>
                      <b> {post.description} </b>
                    </div>
                  </Col>
                </div>
              );
            })
          }
        </div>
      );
    }
  }

// Feed.propTypes = {
//     posts: PropTypes.array,
// };


export default Feed;
