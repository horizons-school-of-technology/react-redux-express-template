// Action Creators

import * as types from './types';

export function toggleLoginModal() {
    return {type: types.TOGGLE_LOGIN_MODAL};
}

export function logout() {
    return {type: types.LOGOUT};
}

export function login(user) {
    return {type: types.LOGIN, user: user};
}

export function getPosts(posts) {
    return {type: types.GET_POSTS, posts: posts};
}
