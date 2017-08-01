import React from 'react';
import { render } from 'react-dom';
import './assets/stylesheets/base.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/home';
import How from './components/how';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {Switch, Redirect, Route, HashRouter} from 'react-router-dom';

injectTapEventPlugin();

ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
              <Switch>
                  <Redirect from='/' to ='/home' strict />
              </Switch>
              <Route strict path='/home' component={Home}/>
              <Route strict path='/how' component={How}/>
          </div>
        </MuiThemeProvider>
    </HashRouter>,
  document.getElementById('app')
);
