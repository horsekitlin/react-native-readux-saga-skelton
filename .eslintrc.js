module.exports = {
  extends: "standard",
  parser: "babel-eslint",
  env: {
    node: true,
    "react-native/react-native": true
  },
  ecmaFeatures: {
    jsx: true
  },
  settings: {
    "import/parser": "babel-eslint",
    "import/resolve": {
      moduleDirectory: ["node_modules", "src"]
    }
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/jsx-uses-vars": [2],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "space-before-function-paren": ["error", "never"],
    "no-trailing-spaces": [2, { skipBlankLines: true, ignoreComments: true }],
    "no-unused-vars": 2,
    semi: [2, "always"],
    quotes: [2, "double"],
    "generator-star-spacing": "off"
  }
};
