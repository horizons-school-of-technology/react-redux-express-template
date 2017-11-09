import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={AppContainer}/>
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
