import types from '../constants/actionTypes';
import { takeLatest } from "redux-saga/effects";
import {loginSaga} from "./authSagas";
import { initialAppInformationSaga } from './settingSaga';

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchInitialAppInformation() {
  yield takeLatest(types.INIT_APP_INFORMATION, initialAppInformationSaga);
}
