import {connect} from "react-redux";
import App from "../App";
import {initialAppInformation} from "../actions/settingActions";

const mapStateToProps = ({ auth, setting }) => ({
  auth, setting
});

const mapDispatchToProps = (dispatch) => ({
  handleInitialApp: payload => {
    dispatch(initialAppInformation());
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
