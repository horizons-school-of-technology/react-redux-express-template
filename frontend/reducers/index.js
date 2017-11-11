function rootReducer(state = {
    isModalOpen: false,
    signUp: false}, action) {
    switch (action.type) {
        case "TOGGLE_LOGIN_MODAL":
            console.log(state.isModalOpen);
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});
        case "SIGN_UP":
            return Object.assign({}, state, {signUp: !state.signUp});
        default:
            return state;
    }
}

export default rootReducer;
