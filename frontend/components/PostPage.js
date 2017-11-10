import React from 'react';
import axios from 'axios';
import {TextField, RaisedButton} from 'material-ui';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      data: [ { title: 'loading', body: 'loading', id: '0', userId: '0' } ],
    }
  }

  componentDidMount() {
    // console.log( this.props.postId );
    axios.get(localStorage.getItem('webAddress') + '/api/post/' + this.props.postId)
    .then(resp => {
      console.log(resp);
      this.setState({data: resp.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitPost() {
    axios.post(localStorage.getItem('webAddress') + '/api/post/new', this.state)
    .then(resp => {
      console.log(resp);
      window.location.hash = '/'
    })
    .catch(err => {console.log(err)});
  }

  render() {

    $(window).on('load', () => {
      this.state.data.forEach(post => {
        $('.parent-post-container').append(`
          <div>hi<div/>
        `)
      });
    });

    return (
      <div className='container'>
        <div className='parent-post-container' style={{border: '1px solid black'}}>
          <h1>{this.state.data[0].title} (postId: {this.props.postId})</h1>
          <p>{this.state.data[0].body} - <i>userId {this.state.data[0].userId}</i></p>
          <br />
          <TextField name='comment' onChange={this.handleInputChange.bind(this)} hintText='Comment' multiLine={true} />
          <RaisedButton onClick={this.handleSubmitPost.bind(this)} label='Submit' primary={true} />
        </div>
        <div className='children-container' style={{marginLeft: '1em'}}>
          {

          }
          {/*this.state.data.children.map(child => {
            return (
              <div key={child.id} className='child-container'>
                <h4>{child.title}</h4>
                <p>{child.body} (id: {child.id})</p>
                <div className='subchildren-container' style={{marginLeft: '1em'}}>
                {child.children.map(subchild => {
                  return <div key={subchild.id} className='subchild-container'>{subchild.body}</div>
                })}
                </div>
              </div>
            )
          })*/}
        </div>
      </div>
    );

  }

}

export default NewPost;
