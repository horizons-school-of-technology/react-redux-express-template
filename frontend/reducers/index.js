function rootReducer(state = {isModalOpen: false}, action) {
    switch (action.type) {
        case "TOGGLE_MODAL":
            var newState = Object.assign({}, state);
            newState.isModalOpen = !newState.isModalOpen
            return newState;
        case "SAVE_USER":
            console.log(action.obj);
            newState = Object.assign(state, action.obj);
            return newState;
        default:
            return state;
    }
}

export default rootReducer;
