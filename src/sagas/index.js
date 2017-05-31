import {
  fork,
} from 'redux-saga/effects';
import {
  watchLoginSaga,
} from './watcher';

export default function* startForman() {
  yield [
    fork(watchLoginSaga),
  ];
}