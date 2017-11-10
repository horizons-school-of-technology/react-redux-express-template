// Action Creators

// import * as types from './types';
export function toggleLoginModal() {
    return {
        type: 'TOGGLE_LOGIN_MODAL'
    };
}

export function loginUserClick(username, password) {
    return {
        type: 'LOGIN',
        username: username,
        password: password
    };
}

export function registerUserClick(username, password, rpw) {
    return {
        type: 'REGISTER',
        username: username,
        password: password,
        rpw: rpw
    };
}

export function toggleSignUpClick() {
    return {
        type: 'SIGN_UP'
    };
}
