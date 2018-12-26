/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import AppContainer from './src/containers/AppContainer';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from './src/store/configureStore';

const store = configureStore();

const CashbackApp = () => 
  <Provider store={store}>
    <AppContainer />
  </Provider>
  

AppRegistry.registerComponent(appName, () => CashbackApp);
