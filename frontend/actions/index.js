// Action Creators

import * as types from './types';
export function toggleLoginAction() {
  return {
    type: types.TOGGLE_LOGIN
  };
};

export function closeLoginAction() {
  return {
    type: "CLOSE_LOGIN"
  }
}
