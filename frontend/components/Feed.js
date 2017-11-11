var React = require('react');
var { Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
var axios = require('axios');
var { Redirect } = require('react-router');
// This assumes we are passing in posts
// Each post has: img (string url) and description
let posts = [{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAALwAAAAJDliZTVkOTcyLWQ0NzUtNDNlZC1hZmEwLTY1NTQ0ZDBjNTE5ZA.jpg',
title: "This is what humans call a 'moose' "},{img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg',
title: "This is what humans call a 'moose' "},
{img: 'http://i.telegraph.co.uk/multimedia/archive/02622/geese_2622145b.jpg',
title: "This is what humans call 'geese'.  The singular term is 'goose'. They are notorious for pooping in groups over the skies."}]

class Feed extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: posts,
      redirect: false,
      post_id: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/posts/all', {
      withCredentials: true
    })
    .then((resp) => {
      this.setState({
        posts: [...this.state.posts, ...resp.data.posts]
      })
    })
    .catch(e => {
      console.log(e);
    })
  }
    postClick(i) {
        console.log('clicked!');
        this.setState({
            redirect: true,
            post_id: this.state.posts[i].id
        });
    }
    render() {
        return (
        this.state.redirect ? <Redirect to={`/post/page/${this.state.post_id}`}/> :
        <div style={{paddingTop: 100}}>
          {
            this.state.posts.map((post, i) => {
                return (
                <div key={Math.random()}>
                  <Col componentClass={ControlLabel} sm={7}>
                    <div style={{ border: '2px solid #a1a1a1', borderRadius: '25px', padding: 15}}>
                      <button type="button" className="btn" style={{margin: 5}}>
                        <span className="glyphicon glyphicon-arrow-up"/>
                      </button>
                      <button type="button" className="btn" style={{margin: 5}}>
                        <span className="glyphicon glyphicon-arrow-down"/>
                      </button>
                      <img src={post.img} height="50" width="50"/>
                      <a onClick={() => this.postClick(i)}>
                        <b> {post.title} </b>
                      </a>
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


export default Feed;
