import React from 'react';
import {
  View,
} from 'react-native';
import {
  connect,
} from 'react-redux';
import {
  DefaultRenderer,
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

class AuthContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const auth = nextProps.auth;
    if (auth.get('isAuth')) {
      Actions.folders({
        type: ActionConst.REPLACE,
        title: 'Folders',
      });
    }
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref={(ref) => this._drewer = ref}
        type="displace"
        open={this.props.routes.open}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<View />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer
          navigationState={children[0]}
          drawer={this._drawer}
          onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


const mapStateToProps = (state) => ({
  routes: state.routes,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);