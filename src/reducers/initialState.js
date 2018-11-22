import immutable from 'immutable';

export const authState = immutable.fromJS({
  isFetching: false,
  isAuth: false,
  info: {},
  token: ''
});
