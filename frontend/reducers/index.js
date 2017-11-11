import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import toggleModalReducer from './toggleModalReducer';
// import logoutReducer from './logoutReducer';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';


const rootReducer = combineReducers({
    toggleLoginModal: toggleModalReducer,
    getPosts: postsReducer,
    login: loginReducer,
    routing: routerReducer // this reducer is used by React Router in Redux
});


export default rootReducer;
