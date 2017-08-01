var React = require('react');
var ReactDOM = require('react-dom');
import {Redirect, Link} from 'react-router-dom';
var axios = require('axios');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import '../assets/stylesheets/base.scss';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isRegistered: false
        };
    }

    onSubmit() {
    // Send a POST request
        axios({
            method: 'POST',
            url: 'http://localhost:3000/registration', // need to define this route
            data: {
                email: this.state.email,
                password: this.state.password, // Hash this password?
            }
        })
          .then(response => {
              if (response.data.success) {
                  this.setState({isRegistered: true});
              } else {
                  console.log('server error with registration, try back later please!');
              }
          });
    }

    render() {
        if(this.state.isRegistered) {
            return(
              <Redirect to="/login"/>
            );
        }
        return(
          <div>
            <center>
              <br/><br/>
            <h1> Textbook Exchange</h1>
            <h3>Register to sell your books!</h3>
            <TextField
              id="text-field-default"
              floatingLabelText="email"
              floatingLabelStyle={{'color': '#B39DDB'}}
              underlineFocusStyle={{'borderBottom': 'solid #000000'}}
              onChange={(event) => this.setState({email: event.target.value })}
              type="text"
              name="email"/>
                <br/>
            <TextField
              id="text-field-default"
              floatingLabelText="password"
              floatingLabelStyle={{'color': '#B39DDB'}}
              underlineFocusStyle={{'borderBottom': 'solid #000000'}}
              onChange={(event) => this.setState({password: event.target.value})}
              type="password"
              name="password" />
                <br/> <br/> <br/>
            <FlatButton
              style={{'display': 'flex'}}
              hoverColor="#B39DDB"
              label="register"
              onClick={() => this.onSubmit()}/>
            <FlatButton
              fullWidth={false}
              hoverColor="#B39DDB"
              label="back to login"
              containerElement={<Link to="/login" />}
            />
            </center>
          </div>
        );
    }
  }


module.exports = Registration;
