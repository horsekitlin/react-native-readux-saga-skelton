import React from "react";
import {
  connect
} from "react-redux";
import {View} from "react-native";
import routes from "../routes";
import LoginScene from "./LoginScene";

class AuthContainer extends React.Component {
  render() {
    const {auth} = this.props;
    if (auth.get("isAuth")) {
      return <View style={{flex: 1}}>
        {routes}
      </View>;
    } else {
      return <LoginScene />;
    }
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
