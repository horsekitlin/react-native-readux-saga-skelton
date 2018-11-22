import React from 'react';
import {ActivityIndicator} from 'react-native';
import { Overlay  } from 'react-native-elements';

const Fetching = ({isOpen = false}) =>
  isOpen && (
    <Overlay fullScreen isVisible 
      overlayStyle={{backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size='large' />
    </Overlay>
  )

export default Fetching;
