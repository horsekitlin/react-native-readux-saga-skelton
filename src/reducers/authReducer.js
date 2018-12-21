import { authState } from "./initialState";
import types from "../constants/actionTypes";

const initialAppSuccess = (auth, payload) =>
  auth.merge({
    isFetching: false,
    info: { ...payload.userInfo },
    isAuth: payload.isAuth,
    initial: true
  });

export default function reducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.LOGIN:
      return auth.merge({ isFetching: true });
    case types.LOGIN_SUCCESS:
      return auth.merge({ isFetching: false, ...payload });
    case types.INIT_APP_INFORMATION_SUCCESS:
      return initialAppSuccess(auth, payload);
    case types.LOGIN_ERROR:
    case types.INIT_APP_INFORMATION:
    case types.INIT_APP_INFORMATION_ERROR:
    default:
      return auth;
  }
}
