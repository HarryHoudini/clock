 /* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  settings: {
    react: {
      "version": "detect"
    },
    "import/resolver": {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".d.ts", ".tsx"]
      }
    }
  },
  rules: {
    "prettier/prettier": 2,

    "no-unused-expressions": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "arrow-body-style": ["error", "as-needed"],

    "curly": ["error", "all"],
    "import/order": 0,
    "@typescript-eslint/no-unused-expressions": 2,
    "@typescript-eslint/no-use-before-define": [2, "nofunc"],
    "@typescript-eslint/no-shadow": [2],

    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/function-component-definition": 0,

    "import/prefer-default-export": 0,
    "import/extensions": [
      2,
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  }
};
