import { takeLatest } from 'redux-saga/effects';
import types from '../constants/ActionTypes';

import {
  loginSaga,
} from './authSaga';

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
