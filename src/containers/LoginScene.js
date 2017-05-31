import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  login,
} from '../actions/auth';

import LoginScene from '../components/LoginScene';

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
)(LoginScene);
