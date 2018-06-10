module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }]
  },
  "globals": {
    "_": true
  }
};

