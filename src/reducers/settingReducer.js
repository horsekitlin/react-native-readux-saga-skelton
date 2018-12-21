import {settingState} from './initialState';
import types from '../constants/actionTypes';

export default function reducer(setting = settingState, { type, payload }) {
  switch (type) {
    case types.START_FETCHING:
      return setting
        .merge({fetchCount: setting.get('fetchCount') + 1});
    case types.STOP_FETCHING:
      return setting
      .merge({fetchCount: setting.get('fetchCount') - 1});
    default:
      return setting;
  }
}
