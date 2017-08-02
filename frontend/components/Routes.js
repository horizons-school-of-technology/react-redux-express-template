import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import App from './App';
import Login from '../containers/Login';
import Writers from './Writers';
import Students from '../containers/Students';
import Register from '../containers/Register';
class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={AppContainer}/>
                    <Route path='/students' component={Students}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/writers' component={Writers}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </App>
        )
    }
}

export default Routes;
