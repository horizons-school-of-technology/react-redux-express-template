function rootReducer(state = {isModalOpen: false}, action) {
    switch (action.type) {
        case "TOGGLE_LOGIN":
            var newState = Object.assign({}, state);
            newState.isModalOpen = !newState.isModalOpen
            return newState;
        case "CLOSE_LOGIN":
            newState = Object.assign({}, state);
            newState.isModalOpen = !newState.isModalOpen
            return newState;
        default:
            return state;
    }
}

export default rootReducer;
