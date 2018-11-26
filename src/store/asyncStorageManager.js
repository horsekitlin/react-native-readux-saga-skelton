import {AsyncStorage} from 'react-native';

const APP_INFORMATION = '_APP_INFRMATION';

export const getAppInformation = () => AsyncStorage.getItem(APP_INFORMATION);
export const setAppInformation = (data) => AsyncStorage.setItem(APP_INFORMATION, JSON.stringify(data));
