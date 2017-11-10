import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
// import DevTools from './DevTools';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './LoginContainer';

export default function Root({ store }) {
  return (
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={AppContainer} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Login} />
            </Switch>
          </HashRouter>
        </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
