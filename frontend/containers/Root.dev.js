import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import Feed from '../components/Feed.js';
import NewPost from '../components/NewPost.js';
import DevTools from './DevTools';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={AppContainer}/>
          <Route exact path='/feed' component={AppContainer}/>
          <Route exact path='/post/new' component={NewPost}/>

        </Switch>
      </HashRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
