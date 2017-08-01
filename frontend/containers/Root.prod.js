import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';
import { Router } from 'react-router';
import Routes from '../components/Routes'

export default function Root({ store, history }: RootType) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes/>
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
