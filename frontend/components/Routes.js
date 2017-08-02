import React, { Component } from 'react';
import { Switch, Router, Redirect, Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import App from './App';
import Login from '../containers/Login';
import Writers from './Writers';
<<<<<<< HEAD
import Students from './Students';
=======
import Students from '../containers/Students';
>>>>>>> 3f81ce089b4e5d384ebf8b7218f68c1e8865a5cf

class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={AppContainer}/>
                    <Route path='/students' component={Students}/>
<<<<<<< HEAD
=======
                    <Route path='/login' component={Login}/>
>>>>>>> 3f81ce089b4e5d384ebf8b7218f68c1e8865a5cf
                    <Route path='/writers' component={Writers}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </App>
        )
    }
}

export default Routes;
