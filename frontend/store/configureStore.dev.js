import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import createHistory from 'history/createBrowserHistory';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            DevTools.instrument()
        )
    );
}

export const history = createHistory();
