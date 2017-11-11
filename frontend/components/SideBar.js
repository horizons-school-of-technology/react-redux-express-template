import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import SubmitPost from './SubmitPost';
import Login from './Login';
import Description from './Description';
import axios from 'axios';

class SideBar extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            loggedIn: false,
            description: "I don't know what you need here."
        };
    }
    onLogin() {
        this.setState({
            loggedIn: true
        });
    }
    logout()  {
        axios.get('http://localhost:3000/api/logout', {
          withCredentials: true
        })
        .then((resp) => {
          console.log(resp.data);
            this.setState({
                loggedIn: false
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <div style={{  position: 'fixed', top: 90, right: 0, width: '300px', border: '3px solid black', margin: 14}}>
              <SubmitPost />
              {(this.state.loggedIn) ? (<Button onClick={() => this.logout()}>Log Out</Button>)
              : (<Login onLogin={() => this.onLogin()} />)}
              <Panel header={"Description"}>
                <Description description={this.state.description}/>
              </Panel>
            </div>
        );
    }
}

export default SideBar;
