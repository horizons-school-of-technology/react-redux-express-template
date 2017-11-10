var React = require('react');
var {Redirect} = require('react-router');
var {FormGroup, FormControl, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');
var axios = require('axios');

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            title: '',
            description: '',
            link: '',
            image: ''
        };
    }

    postNewPost() {
        axios.post('http://localhost:3000/api/post/new', {
            postId: null,
            img: this.state.image,
            description: this.state.description,
            title: this.state.title
        })
        .catch(e => {
            console.log("Posting new post failed", e);
        });
    }
    onSubmitPost() {
        this.setState({
            redirect: true
        }, () => this.postNewPost());
    }
    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    onLinkChange(e) {
        this.setState({
            link: e.target.value
        });
    }
    onImgSelect(e) {
        this.setState({
            image: e.target.value
        });
    }
    render() {
        function FieldGroup({ id, type, label, help }) {
            return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl type={type} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
            );
        }
        return (
        (this.state.redirect) ? (<Redirect to="/"/>) : (
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Title
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder="Title" onChange={(e) => this.onTitleChange(e)}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Description
              </Col>
              <Col sm={8}>
                <FormControl componentClass="textarea" placeholder="Description" onChange={(e) => this.onDescriptionChange(e)}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Links
              </Col>
              <Col sm={8}>
                <FormControl type="text" placeholder="Links" onChange={(e) => this.onLinkChange(e)}/>
              </Col>
            </FormGroup>

            <Col componentClass={ControlLabel} sm={2}>
              Select image
            </Col>
            <Col sm={10}>
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Select your image that others will see."
                onSelect={(e) => this.onImgSelect(e)}
              />
            </Col>

            <Col componentClass={ControlLabel} sm={2}>
              <button  onClick={() => this.onSubmitPost()} type="button" className="btn btn-success" style={{margin: 5}}>
                Save post
              </button>
            </Col>
          </Form>
        )
        );
    }
}

export default NewPost;
