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
            })
            .then(() => {
                return Object.assign({}, state, {loggedIn: action.username});
            })
            .catch(err => {
                console.log(err);
                return state;
            });
            break;
        case "REGISTER":
            axios.post('http://localhost:3000/api/register', {
                username: action.username,
                password: action.password,
                repeatPassword: action.rPassword
            })
            .catch(err => {
                console.log(err);
                return state;
            });
            return Object.assign({}, state);
        case "SIGN_UP":
            return Object.assign({}, state, {signUp: !state.signUp});
        case "LOG_OUT":
            axios.get('http://localhost:3000/api/logout')
            .then(() => {
                return Object.assign({}, state, {loggedIn: ''});
            })
            .catch(err => {
                console.log(err);
                return state;
            });
            break;
        default:
            return state;
    }
}

export default rootReducer;
