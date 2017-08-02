import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// export type reducerStateType = {
//     +titleReducer: object
// };

const reducer = (state = {}, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'LOGIN':
            newState.user = action.user;
            newState.token = action.token;
            console.log('logged in. token:', newState.token);
            return newState;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
    router
});

export default rootReducer;
