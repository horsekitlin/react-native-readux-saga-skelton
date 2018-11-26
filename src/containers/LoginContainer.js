import {connect} from "react-redux";
import LoginScene from "../components/LoginScene";
import { loginAction } from "../actions/authActions";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: payload => {
    dispatch(loginAction(payload));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginScene);
