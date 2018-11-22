import {connect} from "react-redux";
import LoginScene from "../components/LoginScene";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginScene);
