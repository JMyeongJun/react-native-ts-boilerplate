[![npm version](https://img.shields.io/npm/v/react-native-ts-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/jmyeongjun/react-native-ts-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-ts-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/jmyeongjun/react-native-ts-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

# react-native-typescript-boilerplate
This is React-Native boilerplate with Typescript
- New React Native Architecture Ready (RN 0.72+) 🍻
- Latest `React` and `React Native` Dependencies 🌟

# 🚀 Getting Started

## Quick Start

To create a new project using the barebone boilerplate:

```sh
git clone https://github.com/JMyeongJun/react-native-ts-boilerplate.git <my-app-name>
```

# 🎯 Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies
There is a good example by default on `HomeScreen`. You can delete the all screens.

- `rm -rf .git README.md`
- `git init`
- `yarn install`
- `cd ios && pod install` (iOS Only)
- `react-native run-ios/android`

## Rename the project: (Thanks to [react-native-rename](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```
