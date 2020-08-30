# webview-state-bridge

## About

The `webview-state-bridge` package is a [redux](https://redux.js.org/)-powered state bridge between any [react](https://reactjs.org/) app running in a [react-native](https://reactnative.dev/) app through a [react-native-webview].

## Getting Started

### Installation

In both react and react-native apps, install as follows.

```sh
yarn add webview-state-bridge
```

### Provider Components

In the `react` app, wrap the app root with the `NativeProvider` component.

```jsx
// react app root
import { WebProvider } from 'webview-state-bridge';
// ... Other code here ...
<WebProvider>
    <App />
</WebProvider>
```

```jsx
// react-native app root
import { NativeProvider } from 'webview-state-bridge';
// ... Other code here ...
<NativeProvider>
    <App />
</NativeProvider>
```

### Redux Middleware

This package has two different pieces of [redux middleware](https://redux.js.org/advanced/middleware) for the two different react and react-native environments that help sync the redux states that need to be added to each app's redux store configuration.

#### With Redux

In the react app, add the middleware to the store configuration similar to the following.

```js
// react store config
import { createStore, applyMiddleware } from 'redux'
import { webMiddleware } from 'webview-state-bridge';
// ... Other code here ...
const store = createStore(yourReducers, yourInitialState, applyMiddleware(webMiddleware));
```

```js
// react-native store config
import { createStore, applyMiddleware } from 'redux'
import { nativeMiddleware } from 'webview-state-bridge';
// ... Other code here ...
const store = createStore(yourRootReducer, yourPreloadedState, applyMiddleware(nativeMiddleware));
```

#### With Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) is `The official, opinionated, batteries-included toolset for efficient Redux development`. To preserve the default store configurations it provides install in your react and react-native apps as follows.

```js
// react store config
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { webMiddleware } from 'webview-state-bridge';
// ... Other code here ...
const store = configureStore({
  reducer: yourRootReducer
  middleware: [...getDefaultMiddleware(), webMiddleware]
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: yourPreloadedState,
});
```

```js
// react-native store config
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { nativeMiddleware } from 'webview-state-bridge';
// ... Other code here ...
const store = configureStore({
  reducer: yourRootReducer
  middleware: [...getDefaultMiddleware(), nativeMiddleware]
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: yourPreloadedState,
});
```

## Setup explained

WIP

### Demo Usage

This package lives in a [lerna](https://github.com/lerna/lerna) monorepo. Which means it's a single code repository hosting multiple packages and apps.

#### Install, Build, Link

This repo uses yarn, make sure it's installed and run the following to install, build, and link the monorepo packages together automatically.

```sh
yarn
```

#### Available Commands

```sh
yarn start
```

## Contributing

We strongly believe knowledge, work, and tools should be openly shared with the world. We face challenging times together as our planet rapidly changes, we need to collaborate to face these daunting challenges. If this project helps you or your organization build universal apps faster, please consider contributing to the ongoing development and maintenance of this effort. We welcome any and all contributions which may include (but not limited to) any of the following.

- Reporting bugs, asking questions, proposing improvements, or any other ideas by [opening an issue](TODO-url-here).
- Documentation improvements.
- Example app functionality additions (this would be amazing!).
- Code contributions! Please feel free to dig into the code to fix a bug, [open a PR](TODO-url-here), and we'll make sure the effort gets the attention it deserves.
- Feedback! All important to improving anything, we love to hear how you or your organization is using this code, what's working, what could be improved, and what isn't appreciated.
- Resources! If there's any related project/effort that we can link to and help our community find resources and grow, the better! Open an issue to mention it or better yet open a PR to add to the documentation.

## Resources

This project benefits from demoing the integration of amazing open source work from the following efforts.
