import types from '../constants/actionTypes';

export const loginAction = (payload) => ({
  type: types.LOGIN,
  isAsync: true,
  payload
});
