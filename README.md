# react-native-typescript-boilerplate
This is react-native boilerplate with typescript

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

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```
