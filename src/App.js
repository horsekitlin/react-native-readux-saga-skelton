import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Fetching from './components/common/Fetching';
import ReduxWithRouter from './containers/RouterContainer';
import Login from './containers/LoginContainer';
import routes from './routes';

export default class App extends Component {
  componentDidMount() {
    this.props.handleInitialApp();
  }

  render() {
    const {auth, setting} = this.props;

    if(!auth.get('initial')) return <Fetching isOpen={true} />;

    return (
      <View style={styles.container}>
        {
          auth.get('isAuth')
            ? <ReduxWithRouter scenes={routes} />
            : <Login handleLogin={this.props.handleLogin} />
        }
        <Fetching isOpen={setting.get('fetchCount') > 0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
