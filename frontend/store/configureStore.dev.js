import { createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            DevTools.instrument()
        )
    );
}
