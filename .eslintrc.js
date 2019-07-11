module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
    jasmine: true,
    "jest/globals": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "babel", "jasmine", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "babel/new-cap": 1,
    "babel/camelcase": 1,
    "babel/no-invalid-this": 1,
    "babel/object-curly-spacing": 1,
    "babel/quotes": 1,
    "babel/semi": 1,
    "babel/no-unused-expressions": 1,
    "babel/valid-typeof": 1,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
};
