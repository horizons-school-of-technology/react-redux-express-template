import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// export type reducerStateType = {
//     +titleReducer: object
// };

function titleReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    titleReducer,
    router
});

export default rootReducer;
