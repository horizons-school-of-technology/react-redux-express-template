import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NewPost from '../components/NewPost';


export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <HashRouter history={history}>
              <div>
                <DevTools />
                <Switch>
                  <Route exact path="/" component={AppContainer} />
                  <Route exact path="/post/new" component={NewPost}/>
                </Switch>
              </div>
            </HashRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object
};
