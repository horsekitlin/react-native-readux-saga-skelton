import types from '../constants/actionTypes';

export const initialAppInformation = () => ({
  type: types.INIT_APP_INFORMATION,
  isAsync: true,
});
