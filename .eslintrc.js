module.exports = {
  root: true,
  extends: "@react-native",
  ignorePatterns: [
    "**/*/*.js",
    "*.js",
    "*.svg",
    "*.json",
    "*.png",
    "package.json",
    "package-lock.json",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": 1,
    "react-native/no-inline-styles": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
