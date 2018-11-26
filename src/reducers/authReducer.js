import {authState} from './initialState';
import types from '../constants/actionTypes';

export default function reducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.INIT_APP_INFORMATION_SUCCESS:
      return auth.merge({isFetching: false, isAuth: payload.isAuth, initial: true});
    case types.INIT_APP_INFORMATION:
    case types.INIT_APP_INFORMATION_ERROR:
    default:
      return auth;
  }
}
