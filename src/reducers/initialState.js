import immutable from 'immutable';

export const authState = immutable.fromJS({
  initial: false,
  isFetching: false,
  isAuth: false,
  info: {},
  token: ''
});
