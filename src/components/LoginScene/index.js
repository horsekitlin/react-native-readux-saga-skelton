import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {Button, CheckBox} from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fetching from "../common/Fetching";
import { authState } from "../../reducers/initialState";

class LoginScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      toggle: true,
      checked: false,
    };
  }

  handleSubmit = () => {
    this.props.handleLogin(this.state);
  }

  onEyePress = () => 
    this.setState(state => ({...state, toggle: !state.toggle}))

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.formContainer}
        keyboardVerticalOffset={60}>
        
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/images/LOGO.png")}
          />
        </View>
        <View style={{flex: 3}}>
          <View style={styles.textSection}>
            <Text style={styles.textLabel}>用户名</Text>
            <TextInput
              returnKeyType="done"
              style={styles.textContent}
              underlineColorAndroid="transparent"
              placeholder="请输入用户名"
              onChangeText={(account) => this.setState({ account })}
              value={this.state.account}
            />
          </View>
          <View style={styles.textSection}>
            <Text style={styles.textLabel}>密码</Text>
            <TextInput
              returnKeyType="done"
              style={styles.textContent}
              underlineColorAndroid={"transparent"}
              secureTextEntry={this.state.toggle}
              placeholder="请输入8码以上英数组合"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this.onEyePress}>
              <View style={styles.toogleBtn}>
                {this.state.toggle
                  ? <FontAwesome name="eye-slash" style={styles.toogleSize} />
                  : <FontAwesome name="eye" style={styles.toogleSize} />
                }
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.checkBoxSection}>
            <CheckBox
              containerStyle={{
                backgroundColor: '#fff',
                borderWidth: 0,
                paddingHorizontal: 0,
                marginHorizontal: 0
              }}
              left
              title='记住密码'
              checkedColor='#4869ee'
              checked={this.state.checked}
              onPress={() => this.setState(state => ({...state, checked: !this.state.checked}))}
            />
          </View>
          <View style={styles.buttonSection}>
            <TouchableHighlight style={styles.submit}
              underlayColor="#3751B8"
              onPress={this.handleSubmit}
            >
              <Text style={[styles.submitText]}>登录</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.linkSection}>
          <Button
            backgroundColor="transparent"
            textStyle={{ textAlign: 'left', color: '#515556' }}
            title='找回密码'
            onPress={(e) => this.onGotoNextScreen('ResetPassword')}
          />
          <Button
            backgroundColor="transparent"
            textStyle={{ textAlign: 'right', color: '#515556' }}
            title='注册新用户'
            onPress={(e) => this.onGotoNextScreen('Register')}
          />
        </View>
        <View style={{flex: 1}} />
        <Fetching isOpen={this.props.auth.get('isFetching')} />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: 120,
    height: 120,
    marginTop: 30,
    marginBottom: 30,
  },
  textSection: {
    width: "100%",
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.12)",
  },
  checkBoxSection: {
    width: "100%",
    height: 52,
    flexDirection: "row",
    alignItems: "center",
  },
  textLabel: {
    width: "30%",
  },
  textContent: {
    flex: 1,
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  submit: {
    width: "100%",
    backgroundColor: "#4869ee",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    marginTop: 20,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  linkSection: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  versionSection: {
    marginTop: 50,
  },
  toogleBtn: {
    padding: 15,
  },
  toogleSize: {
    fontSize: 16,
  }
});

export default LoginScene;
