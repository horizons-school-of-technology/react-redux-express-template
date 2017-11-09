var React = require('react');
var {Navbar, FormGroup, FormControl, Button, Checkbox, Col, Form, ControlLabel, HelpBlock} = require('react-bootstrap');

class NewPost extends React.Component {
  constructor(props) {
    super(props);
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
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Title
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Title" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={8}>
              <FormControl componentClass="textarea" placeholder="Description" />
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
            />
          </Col>

          <Col componentClass={ControlLabel} sm={2}>
            <button type="button" className="btn btn-success" style={{margin: 5}}>
              Save post
            </button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default NewPost;
