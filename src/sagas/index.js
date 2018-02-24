import {
  fork,
  all
} from "redux-saga/effects";
import {
  watchLoginSaga
} from "./watcher";

export default function* startForman() {
  yield all([
    fork(watchLoginSaga)
  ]);
}
