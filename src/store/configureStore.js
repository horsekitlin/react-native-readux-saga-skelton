import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];
  return {
    ...createStore(rootReducer,
      compose(applyMiddleware(...middlewares))),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
