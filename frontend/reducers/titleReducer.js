import * as types from '../actions/types';

const generateState = () => {
  return 'Reddit Clone'
}

const initialState = generateState();

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_ALL:
      return generateState();
    default:
      return state;
  }
};

export default titleReducer;
