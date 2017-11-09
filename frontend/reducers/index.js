import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import titleReducer from './titleReducer';

const rootReducer = combineReducers({
  title: titleReducer,
  routing,
});

export default rootReducer;
