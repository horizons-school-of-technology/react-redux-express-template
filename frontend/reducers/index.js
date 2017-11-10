const defaultState = {
  name: 'Horizons',
  user: null,
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case ('USER'):
      console.log(action);
      return {user: action.user || state.user};
    default:
      return state;
  }
}

export default rootReducer;
