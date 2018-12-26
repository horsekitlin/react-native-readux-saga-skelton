import {connect} from "react-redux";
import App from "../App";
import {Router} from 'react-native-router-flux';

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(Router);
