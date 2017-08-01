import React from 'react';
import { render } from 'react-dom';
import * as configureStore from './store/configureStore.dev';
import Root from './containers/Root.dev';

import './assets/stylesheets/base.scss';

console.log(Root);

const store = configureStore.configureStore();

console.log('index');

render(
    <Root store={store} history={configureStore.history} />,
    document.getElementById('root')
);
