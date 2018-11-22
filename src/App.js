import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fetching from './components/common/Fetching';
import Main from './components/MainScene';
import Login from './containers/LoginContainer';

export default class App extends Component {
  render() {
    const {auth} = this.props;
    if(!auth.get('initial')) return <Fetching isOpen={true}/>;

    return (
      <View style={styles.container}>
        {
          auth.get('isAuth')
            ? <Main />
            : <Login />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
