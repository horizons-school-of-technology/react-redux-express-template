function loginReducer(state = {username: "", password: ""}, action) {
    // console.log('here 3', state, action);
    switch (action.type) {
        case 'LOGIN':
            const newState = Object.assign({}, state);
            newState.username = action.user.username;
            newState.password = action.user.password;
            return newState;
        case 'LOGOUT':
            const newState2 = Object.assign({}, state);
            newState2.username = "";
            newState2.password = "";
            return newState2;
        default:
            return state;
    }
}

export default loginReducer;
