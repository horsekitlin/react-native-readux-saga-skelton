import types from '../constants/actionTypes';

export const startFetchingMiddleware = store => next => action => {
  if(action.isAsync) next({type: types.START_FETCHING});
  return next(action);
};

export const stopFetchingMiddleware = store => next => action => {
  if(action['@@redux-saga/SAGA_ACTION']) next({type: types.STOP_FETCHING});
  return next(action);
};