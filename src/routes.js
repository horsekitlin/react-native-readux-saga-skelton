import React from "react";
import {
  Scene,
  Router
} from "react-native-router-flux";

import FolderScene from "./containers/FoldersScene";

export default <Router>
  <Scene key="nav"
    hideNavBar={false}
  >
    <Scene
      title="Folder"
      component={FolderScene}
      key="folders"
    />
  </Scene>
</Router>;
