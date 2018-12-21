import {combineReducers} from 'redux';
import auth from './authReducer';
import setting from './settingReducer';

export default combineReducers({
  auth,
  setting,
});
