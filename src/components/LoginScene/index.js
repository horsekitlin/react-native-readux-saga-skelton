import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import { Grid, Row, Col } from "react-native-easy-grid";
import colors from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCN } from "../../utils/LanguageManager";

const EyeIconButton = (props) =>
  <Button clear {...props}  icon={<Icon name="eye" size={15} />} title="" />

const EyeSlashIconButton = (props) => console.log(props) ||
  <Button clear {...props} icon={<Icon name="eye-slash" size={15} />} title="" />

class LoginScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      toggle: true,
      checked: false
    };
  }

  handleSubmit = () => {
    this.props.handleLogin(this.state);
  };

  onEyePress = (toggle) => () => console.log(toggle) ||
    this.setState(state => ({ ...state, toggle }));

  handleRememberMe = () =>
    this.setState(state => ({
      ...state,
      checked: !this.state.checked
    }));

  render() {
    console.log(this.state.toggle);
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Grid>
          <Row size={1} style={styles.center}>
            <Image source={require("../../assets/images/LOGO.png")} />
          </Row>
          <Row style={styles.formColumn}>
            <Input containerStyle={styles.formUnit} label={getCN("用戶名")} />
          </Row>
          <Row style={styles.formColumn}>
            <Input
              type='password'
              secureTextEntry={this.state.toggle}
              onClick={this.onEyePress}
              containerStyle={styles.formUnit}
              rightIcon={
                this.state.toggle
                  ? <EyeIconButton onPress={this.onEyePress(false)} />
                  : <EyeSlashIconButton onPress={this.onEyePress(true)} />
              }
              label={getCN("登錄密碼")}
            />
          </Row>
          <Row style={styles.formColumn}>
            <CheckBox
              checked={this.state.checked}
              onPress={this.handleRememberMe}
              containerStyle={styles.checkBoxContainer}
              title={getCN("記住密碼")}
            />
          </Row>
          <Row style={styles.center}>
            <Button
              containerStyle={styles.formUnit}
              buttonStyle={styles.loginButton}
              title={getCN("登錄")}
            />
          </Row>
          <Row style={styles.center}>
            <Row style={styles.formUnit}>
              <Col>
                <Button
                  title="找回密码"
                  titleStyle={styles.linkButtonText}
                  buttonStyle={styles.linkButton}
                  onPress={e => this.onGotoNextScreen("ResetPassword")}
                />
              </Col>
              <Col>
                <Button
                  title="注册新用户"
                  titleStyle={styles.linkButtonText}
                  buttonStyle={styles.linkButton}
                  onPress={e => this.onGotoNextScreen("Register")}
                />
              </Col>
            </Row>
          </Row>
        </Grid>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, display: "flex", marginTop: 112 },
  linkButton: { backgroundColor: "transparent" },
  linkButtonText: { color: colors.blue["700"] },
  formUnit: { width: "70%" },
  center: { justifyContent: "center" },
  loginButton: { backgroundColor: colors.blue["900"] },
  formColumn: {
    justifyContent: "center",
    maxHeight: 60,
    marginTop: 20,
    marginBottom: 20
  },
  checkBoxContainer: {
    width: "70%",
    backgroundColor: colors.white,
    borderWidth: 0
  },
});

export default LoginScene;
