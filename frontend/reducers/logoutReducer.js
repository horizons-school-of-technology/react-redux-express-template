function logoutReducer(state = {username: "", password: ""}, action) {
    switch (action.type) {
        case 'LOGOUT':
            const newState = Object.assign({}, state);
            newState.username = "";
            newState.password = "";
            return newState;
        default:
            return state;
    }
}

export default logoutReducer;
