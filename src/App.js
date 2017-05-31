
import React from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import {
  Router,
} from 'react-native-router-flux';

import configureStore from './store/configureStore';
import routes from './routes';
const store = configureStore();

const RouterWithRedux = connect()(Router);

const ProviderWrapper = () => (
  <Provider store={store}>
    <RouterWithRedux scenes={routes} />
  </Provider>
);

export default ProviderWrapper;
