import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];
  return {
    ...createStore(rootReducer,
      composeEnhancers(applyMiddleware(...middlewares))),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
