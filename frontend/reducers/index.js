import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import toggleModalReducer from './toggleModalReducer';
// import logoutReducer from './logoutReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
    toggleLoginModal: toggleModalReducer,
    // logout: logoutReducer,
    login: loginReducer,
    routing: routerReducer // this reducer is used by React Router in Redux
});


export default rootReducer;
