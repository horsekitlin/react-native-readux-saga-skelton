
import React from "react";
import {
  Provider
} from "react-redux";
import AuthWrapper from "./containers/AuthWrapper";
import configureStore from "./store/configureStore";
const store = configureStore();

const ProviderWrapper = () => (
  <Provider store={store}>
    <AuthWrapper />
  </Provider>
);

export default ProviderWrapper;
