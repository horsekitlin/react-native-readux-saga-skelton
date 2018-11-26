import {put, call} from 'redux-saga/effects';
import types from '../constants/actionTypes';

export function* initialAppInformationSaga () {
  try {
    console.log('initial app information saga');
  }catch (error) {
    console.log(error);
  }
}