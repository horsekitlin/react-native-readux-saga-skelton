import React, {
  Component,
} from 'react';
import {
  View,
} from 'react-native';
import {
  Scene,
  Actions,
} from 'react-native-router-flux';

import FolderScene from './containers/FoldersScene';
import LoginScene from './containers/LoginScene';
import AuthWrapper from './containers/AuthWrapper';

export default Actions.create(
  <Scene key="root">
    <Scene key="auth" component={AuthWrapper} >
      <Scene key="nav"
        hideNavBar={false}
      >
        <Scene key="login"
          renderLeftButton={() => <View />}
          component={LoginScene}
        />
        <Scene
          renderLeftButton={() => <View />}
          component={FolderScene}
          key="folders"
        />
      </Scene>
    </Scene>
  </Scene>,
);
