import {connect} from "react-redux";
import Home from "../components/HomeScene";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
