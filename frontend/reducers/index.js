const axios = require('axios');

function rootReducer(state = {
    name: 'Horizons',
    isModalOpen: false,
    description: "something",
    loggedIn: '',
    signUp: false}, action) {
    switch (action.type) {
        case "TOGGLE_LOGIN_MODAL":
            console.log(state.isModalOpen);
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});
        case "LOGIN":
            axios.post('http://localhost:3000/api/login', {
                username: action.username,
                password: action.password
            })
            .then((response) => {
                console.log(response.data);
                return Object.assign({}, state, {loggedIn: action.username, isModalOpen: !state.isModalOpen});
            })
            .catch(err => {
                console.log(err);
                return state;
            });
            break;
        case "REGISTER":
            console.log(action.rpw);
            axios.post('http://localhost:3000/api/register', {
                username: action.username,
                password: action.password,
                repeatPassword: action.rpw
            })
            .then((response) => {
                console.log(response.data);
                console.log(state.signUp);
                return Object.assign({}, state, {signUp: !state.signUp, modalOpen: !state.modalOpen});
            })
            .catch(err => {
                console.log(err);
                return state;
            });
            break;
        case "SIGN_UP":
            return Object.assign({}, state, {signUp: !state.signUp});
        case "LOG_OUT":
            axios.get('http://localhost:3000/api/logout')
            .then(() => {
                return Object.assign({}, state);
            })
            .catch(err => {
                console.log(err);
                return Object.assign({}, state);
            });
            break;
        default:
            return state;
    }
}

export default rootReducer;
