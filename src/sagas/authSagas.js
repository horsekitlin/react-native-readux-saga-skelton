import {put} from 'redux-saga/effects';
import types from '../constants/actionTypes';

export function* loginSaga({ payload }) {
  yield put({
    type: types.LOGIN_SUCCESS,
  });
}