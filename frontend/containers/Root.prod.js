import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default function Root() {
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={AppContainer}/>
      </Router>
    </div>
  );
}

Root.propTypes = {
};
