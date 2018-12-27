import {AsyncStorage} from 'react-native';

const APP_INFORMATION = '_APP_INFRMATION';
const APP_USER_INFORMATION = '_APP_USER_INFORMATION';

export const getAppInformation = () => AsyncStorage.getItem(APP_INFORMATION);
export const setAppInformation = (data) => AsyncStorage.setItem(APP_INFORMATION, JSON.stringify(data));
export const removeAppInformation = () => AsyncStorage.removeItem(APP_INFORMATION);

export const saveUserInformation = (userInfo) => AsyncStorage.setItem(APP_USER_INFORMATION, JSON.stringify(userInfo));
export const getUserInformation = () => AsyncStorage.getItem(APP_USER_INFORMATION);
export const removeUserInformation = () => AsyncStorage.removeItem(APP_USER_INFORMATION);
