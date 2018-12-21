import {put, call, all} from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { getAppInformation, getUserInformation } from '../store/asyncStorageManager';

const initialAppInformationSuccess = (appInfo, userInfo, isAuth = false) => ({
  type: types.INIT_APP_INFORMATION_SUCCESS,
  payload: {
    userInfo,
    isAuth,
    appInfo,
  }
});

const initialAppInformationError = ({message}) => ({
  type: types.INIT_APP_INFORMATION_ERROR,
  payload: {message}
});

export function* initialAppInformationSaga () {
  try {
    const [appInfoStr=null, userInfoStr = null] = yield all([call(getAppInformation), call(getUserInformation)]);
    const isAuth = userInfoStr !== null;

    const appInfo = appInfoStr ? JSON.parse(appInfoStr) : {};
    const userInfo = userInfoStr ? JSON.parse(userInfoStr) : {};

    const resAction = initialAppInformationSuccess(appInfo, userInfo, isAuth);

    yield put(resAction);
  }catch (error) {
    const errorAction = initialAppInformationError(error);
    yield put(errorAction);
  }
}