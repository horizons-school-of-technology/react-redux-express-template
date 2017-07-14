import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Router} from 'react-router-dom';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default function Root() {
    return (
            <div>
                {console.log(history)}
                <Router history={history}>
                    <Route path="/" component={AppContainer}/>
                </Router>
                {/* <AppContainer /> */}
                <DevTools />
            </div>
    );
}

Root.propTypes = {
};
