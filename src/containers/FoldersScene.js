import {
  connect
} from "react-redux";
import FolderScene from "../components/FolderScene";
import {login} from "../actions/auth";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch(login(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderScene);
