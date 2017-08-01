import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';

const history = createHashHistory();

function configureStore(initialState) {

    const middleware = [];
    const enhancers = [];

    const router = routerMiddleware(history);
    middleware.push(router);

    enhancers.push(applyMiddleware(...middleware));
    enhancers.push(DevTools.instrument());

    return createStore(
        rootReducer,
        initialState,
        compose(...enhancers)
    );
}

const six = 6;


export { configureStore, history, six };
