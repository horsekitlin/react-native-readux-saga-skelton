/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import AppContainer from './src/containers/AppContainer';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from './src/store/configureStore';
import { ThemeProvider } from 'react-native-elements';

const store = configureStore();

const theme = {
};

const CashbackApp = () =>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </ThemeProvider>
  

AppRegistry.registerComponent(appName, () => CashbackApp);
