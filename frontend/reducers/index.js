const axios = require('axios');

function rootReducer(state = {
    name: 'Horizons',
    isModalOpen: false,
    description: "something",
    loggedIn: '',
    signUp: false}, action) {
    switch (action.type) {
        case "TOGGLE_LOGIN_MODAL":
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});
        case "LOGIN":
            axios.post('http://localhost:3000/api/login', {
                username: action.username,
                password: action.password
            });
            return state;
        case "Register":
            axios.post('http://localhost:3000/api/register', {
                username: action.username,
                password: action.password,
                repeatedPassword: action.rpw
            });
            return state;
        case "SIGN_UP":
            return Object.assign({}, state, {signUp: !state.signUp});
        default:
            return state;
    }
}

export default rootReducer;
