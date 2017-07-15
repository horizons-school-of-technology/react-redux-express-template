import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TutorHomeComponent from './components/TutorHomeComponent';
import TutorRegisterComponent from './components/TutorRegisterComponent';
import StudentHomeComponent from './components/StudentHomeComponent';
import HomeComponent from './components/Home/HomeComponent';

export default (
	<Switch>
    <Route exact path="/student/home" component={StudentHomeComponent} />
    <Route exact path="/tutor/register" component={TutorRegisterComponent} />
    <Route exact path="/tutor/home" component={TutorHomeComponent} />
    <Route exact path="/" component={HomeComponent} />
	</Switch>
);
