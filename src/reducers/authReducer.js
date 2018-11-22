import types from '../constants/ActionTypes';
import {authState} from './initialState';

export default function reducer(auth = authState, { type }) {
  switch (type) {
    default:
      return auth;
  }
}
