import React from "react";

import {
  List,
  ListItem
} from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

class FolderScene extends React.PureComponent {
  render() {
    return (
      <List>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
    );
  }
}

export default FolderScene;
