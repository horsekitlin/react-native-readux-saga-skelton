import React from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  overlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    position : 'absolute',
    left: 0,
    top: 0,
    width : width, 
    height : height,
    paddingTop : 10,
    paddingLeft : 10,
    paddingRight : 10,
    paddingBottom : 10
  }
});

const Overlay = ({children}) => {
  return (
    <View style={styles.overlay}>
      {children}
    </View>
  );
}
const Fetching = ({isOpen = false}) =>
  isOpen && (
    <Overlay>
      <ActivityIndicator size='large' />
    </Overlay>
  )

export default Fetching;
