import {put, call} from 'redux-saga/effects';
import types from '../constants/actionTypes';

const sleep = (ms = 1000) => new Promise(resolve => {
  setTimeout(resolve, ms);
});
export function* loginSaga({ payload }) {
  yield sleep(2000);
  yield put({
    type: types.LOGIN_SUCCESS,
  });
}