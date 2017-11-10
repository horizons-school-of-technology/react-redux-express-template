const axios = require('axios');

function rootReducer(state = { name: 'Horizons', isModalOpen: false, username: '' }, action) {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});
        case 'SET_USERNAME':
            return Object.assign({}, state, { username: action.data, isModalOpen: false });
        case 'LOGOUT':
            return Object.assign({}, state, { username: '', isModalOpen: false });
        default:
            return state;
    }
}

export default rootReducer;
