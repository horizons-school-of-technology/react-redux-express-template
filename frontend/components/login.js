var React = require('react');
var ReactDOM = require('react-dom');
var { Redirect, Link, HashRouter } = require('react-router-dom');
var Registration = require('./registration');
var axios = require('axios');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import styles from '../assets/stylesheets/base.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            loggedIn: false
        };
    }

    onSubmit() {
      // Send a POST request
      // console.log("entering onSubmit");
        axios({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password // TODO: Hash this password?
            }
        })
        .then(response => {
            if(response.data.success) {
                this.setState({loggedIn: true});
            } else {
                // log in failed
                console.log("log in failed");
            }
        });
    }

    render() {
        if(this.state.loggedIn) {
            return(
              <div>
                <Redirect to={'/home'}/>
              </div>
            );
        } else {
            return(
              <div>
                <center>
                  <br/><br/>
                <h1>BookSwap</h1>
                <h3>Login to sell your books!</h3>
                <TextField
                  hintText="username"
                  floatingLabelText="username"
                  floatingLabelStyle={{'color': '#B39DDB'}}
                  underlineFocusStyle={{'borderBottom': 'solid #000000'}}
                  onChange={(e) => this.setState({username: e.target.value})}
                  type="text"
                  name="username"
                /><br />
                <TextField
                  hintText="email"
                  floatingLabelText="email"
                  floatingLabelStyle={{'color': '#B39DDB'}}
                  underlineFocusStyle={{'borderBottom': 'solid #000000'}}
                  onChange={(e) => this.setState({email: e.target.value})}
                  type="text"
                  name="email"
                /><br />
                <TextField
                  hintText="password"
                  floatingLabelText="password"
                  floatingLabelStyle={{'color': '#B39DDB'}}
                  underlineFocusStyle={{'borderBottom': 'solid #000000'}}
                  onChange={(e) => this.setState({password: e.target.value})}
                  type="password"
                  name="password"
                /><br /><br/>

                <FlatButton
                  style={{'display': 'flex'}}
                  fullWidth={false}
                  hoverColor="#B39DDB"
                  label="Login"
                  onClick={() => this.onSubmit()}
                />
                <FlatButton
                  style={{'display': 'flex'}}
                  fullWidth={false}
                  hoverColor="#B39DDB"
                  label="Register"
                  containerElement={<Link to="/register" />}
                />
                </center>
              </div>
            );
        }
    }
}

module.exports = Login;
