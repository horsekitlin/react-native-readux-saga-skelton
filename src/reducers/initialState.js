import immutable from 'immutable';

export const authState = immutable.from({
  isFetching: false,
  isAuth: false,
  info: {},
  token: ''
});
