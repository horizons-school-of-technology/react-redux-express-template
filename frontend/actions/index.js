// Action Creators

import * as types from './types';
export function toggleModalAction() {
  return {
    type: types.TOGGLE_MODAL
  };
};

export function toggleSaveUser(obj) {
  return {
    type: 'SAVE_USER',
    obj
  };
};
