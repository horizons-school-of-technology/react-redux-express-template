import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../components/Routes';
import DevTools from './DevTools';
// import Router from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

export default function Root({ store, history }) {
    console.log(Provider, ConnectedRouter);
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Routes/>
                    <DevTools />
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
