import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import App from './App';
import Students from './Students';
import Writers from './Writers';

class Routes extends Component {
    render() {
        console.log("STUDENTS COMPONENT", Students)
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={AppContainer}/>
                    <Route path='/students' component={Students}/>
                    <Route path='/writers' component={Writers}/>
                </Switch>
            </App>
        )
    }
}

export default Routes;
