import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import App from './App';
import Login from '../containers/Login';
import Writers from './Writers';

class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={AppContainer}/>
                    <Route path='/students' component={Login}/>
                    <Route path='/writers' component={Writers}/>
                </Switch>
            </App>
        )
    }
}

export default Routes;
