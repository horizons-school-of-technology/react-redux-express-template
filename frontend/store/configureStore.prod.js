import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import rootReducer from '../reducers';

export const history = createHistory();

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}
