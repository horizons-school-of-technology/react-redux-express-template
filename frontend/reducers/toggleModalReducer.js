function toggleModalReducer(state = {isModalOpen: false}, action) {
    switch (action.type) {
        case 'TOGGLE_LOGIN_MODAL':
            const newState = Object.assign({}, state);
            newState.isModalOpen = !newState.isModalOpen;
            return newState;
        default:
            return state;
    }
}

export default toggleModalReducer;
