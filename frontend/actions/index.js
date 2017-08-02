// Action Creators

// import * as types from './types';
const login = (user, token) => {
  return {
    type: 'LOGIN',
    user: user,
    token: token
  };
};

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const actions = {
    login,
    logout
}

export default actions;
