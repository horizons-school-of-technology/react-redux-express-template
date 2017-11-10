import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import Feed from '../components/Feed.js';
import NewPost from '../components/NewPost.js';
import Login from '../components/Login';
import SubmitPost from '../components/SubmitPost';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppContainer from './AppContainer.js';


export default function Root({ store }) {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={AppContainer}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/feed" component={Feed}/>
            <Route exact path="/post/new" component={NewPost}/>
            <Route exact path="/submit/new" component={SubmitPost}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
}
Root.propTypes = {
    store: PropTypes.object.isRequired
};
