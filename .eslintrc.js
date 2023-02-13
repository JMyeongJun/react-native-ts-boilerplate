module.exports = {
  root: true,
  extends: "@react-native-community",
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
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
