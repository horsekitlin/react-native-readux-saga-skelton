import React from 'react';
import {
  View,
} from 'react-native';
import {
  connect,
} from 'react-redux';
import FolderScene from '../components/FolderScene';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch(login(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FolderScene);
