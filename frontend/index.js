import React from 'react';
import { render } from 'react-dom';
import './assets/stylesheets/base.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/home';
import How from './components/how';
import Login from './components/login';
import Registration from './components/registration';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Switch, Redirect, Route, HashRouter} from 'react-router-dom';

injectTapEventPlugin();

ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
              <Switch>
                  <Redirect from="/" to ="/home" strict />
              </Switch>
              <Route strict path='/home' component={Home}/>
              <Route strict path='/how' component={How}/>
              <Route strict path='/register' component={Registration}/>
              <Route strict path='/login' component={Login}/>
          </div>
        </MuiThemeProvider>
    </HashRouter>,
  document.getElementById('app')
);
