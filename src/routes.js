import React from 'react';
import Main from './components/MainScene';
import {View} from 'react-native';
import {Scene, Actions, Modal} from 'react-native-router-flux';
import { Icon, Header } from 'react-native-elements'
import colors from './constants/colors';
import { getCN } from './utils/LanguageManager';


const TabIcon = ({iconName, title, focused}) => {
  return (
    <View><Icon name={iconName} color={focused ? colors.blue[500] : colors.grey[500]} /></View>
  );
}

export default Actions.create(
  <Scene key="root">
    <Scene
      key="nav"
      hideNavBar
      navigationBarStyle={{backgroundColor: colors.blue[700]}}
      titleStyle={{color: colors.white, fontWeight: '700'}}>
      <Scene key='tab' hideNavBar tabs icon={TabIcon} lazy>
        <Scene
          key='main'
          iconName='home'
          title={getCN('首頁')}
          component={Main} />
        <Scene
          key='detail'
          iconName='assignment'
          title={getCN('交易明細')}
          component={Main} />
        <Scene
          key='user'
          iconName='person'
          title={getCN('個人資料')}
          component={Main} />
      </Scene>
    </Scene>
  </Scene>,
);