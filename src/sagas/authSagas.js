import {put, call} from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { loginResult } from '../apis/api';

const okLogin = ({data}) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    isAuth: true,
    info: data
  }
});

const errLogin = ({message}) => ({
  type: types.LOGIN_ERROR,
  payload: {message}
});

export function* loginSaga({ payload }) {
  try {
    const {ok, result} = yield call(loginResult, payload);
    console.log(ok, result)
    const resAction = ok && result.code === '0'
      ? okLogin(result)
      : errLogin(result);

    yield put(resAction);
  } catch(error) {
    const errorAction = errLogin(error);
    yield put(errorAction);
  }
}