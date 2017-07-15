import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

export default (
	<Switch>
    <Route exact path="/" render={() => (<HomeComponent /> )} />
    <Route exact path="/student/home" render={() => (<StudentHomeComponent socket={socket}/> )} />
    <Route exact path="/tutor/register" render={() => (<TutorRegisterComponent socket={socket}/> )} />
    <Route exact path="/tutor/home" render={() => (<TutorHomeComponent socket={socket}/> )} />
	</Switch>
);
