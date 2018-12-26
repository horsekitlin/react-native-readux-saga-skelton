import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { getCN } from '../../utils/LanguageManager';
import { Col } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

const LinkColumn = ({image, label}) =>
  <Col style={styles.iconContainer}>
    <Image source={image} />
    <Text h5 style={styles.iconText}>{getCN(label)}</Text>
  </Col>

export default LinkColumn;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

