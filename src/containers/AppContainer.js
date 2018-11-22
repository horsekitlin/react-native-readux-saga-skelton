import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
