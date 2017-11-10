import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';

export const store = configureStore();
export const history = createHistory();

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
