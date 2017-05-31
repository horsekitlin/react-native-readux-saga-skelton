import types from '../constants/ActionTypes';

export const login = (payload: object) => ({
  type: types.LOGIN_REQUEST,
  payload,
})