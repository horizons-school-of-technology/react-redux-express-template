import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer';
import NewPost from '../components/NewPost';
import DevTools from './DevTools';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <HashRouter>
              <div>
                <Route path="/" component={DevTools} />
                <Switch>
                  <Route exact path="/" component={AppContainer}/>
                  <Route path="/post/new" component={NewPost}/>
                </Switch>
              </div>
            </HashRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
