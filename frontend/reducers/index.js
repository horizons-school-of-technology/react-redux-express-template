function rootReducer(state = { name: 'Horizons', isModalOpen: false }, action) {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});
        default:
            return state;
    }
}

export default rootReducer;
