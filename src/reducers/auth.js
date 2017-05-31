import types from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  isFetching: false,
  isAuth: false,
  info: {},
  token: '',
});

export default function reducer(state = initialState, { type }) {
  switch (type) {
    case types.LOGIN_REQUEST:
      return state.update('isFetching', () => true);
    case types.LOGIN_SUCCESS:
      return state.update('isAuth', () => true)
        .update('isFetching', () => false);
    default:
      return state;
  }
}
