import {put, call} from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { getAppInformation } from '../store/asyncStorageManager';
const initialAppInformationSuccess = (result, isAuth = false) => ({
  type: types.INIT_APP_INFORMATION_SUCCESS,
  payload: {
    result,
    isAuth
  }
});

const initialAppInformationError = ({message}) => ({
  type: types.INIT_APP_INFORMATION_ERROR,
  payload: {message}
});

export function* initialAppInformationSaga () {
  try {
    const result = yield call(getAppInformation);
    const isAuth = result !== null;
    const resAction = initialAppInformationSuccess(result, isAuth);

    yield put(resAction);
  }catch (error) {
    const errorAction = initialAppInformationError(error);
    yield put(errorAction);
  }
}