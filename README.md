# React Native Redux-saga skelton

## Initial React Native

```
  $ react-native init ProjectName
```

## clone src into package

## install packages

```

  $ yarn add flux-constants immutable prop-types react-addons-pure-render-mixin react-native-drawer react-native-elements react-native-material-color react-native-router-flux react-native-vector-icons react-redux redux redux-saga

```

```

  $ react-native link

```

## install Dev packages

```

  $ yarn add --dev remote-redux-devtools babel-eslint

```

## install Eslint

```

  $ yarn global add eslint

```

```

  $ eslint --init

```

1.Use a popular style guide
2.Airbnb
3.Yes
4.Json

## .eslint.json

.js file  允許 jsx 語法

```

{
      "parser": "babel-eslint",
      "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    },
    ...
}
```

## .bablerc

```json

{
  "presets": [
    "react-native"
  ],
  "plugins": [],
  "sourceMaps": true // must be true react-native/packager/transformer using with node-module-debug
  // because of some bugs from vscode-node-debug & vscode-react-native, "sourceMaps" cannot be "inline" or "both"
}

```

## index.ios.js

```js

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('skeklton', () => App);
```

##index.android.js

```js
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('skeklton', () => App);
```