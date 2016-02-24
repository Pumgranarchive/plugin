# Pumgrana Plugin
[![Dependency Status](https://david-dm.org/Pumgrana/plugin.svg?style=flat)](https://david-dm.org/Pumgrana/plugin)
[![devDependency Status](https://david-dm.org/Pumgrana/plugin/dev-status.svg?style=flat)](https://david-dm.org/Pumgrana/plugin#info=devDependencies)

## Requirements
- Node.js (5.0 or newer.)

## Stack
- [React.js](http://facebook.github.io/react/) for building webapps using react
- [Redux](http://rackt.github.io/redux/index.html), a great flux implementation
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [Webpack](https://webpack.github.io/) module loader and bundler

## Install

Just [clone](github-windows://openRepo/https://github.com/Pumgrana/plugin.git) the repo
and start :

```shell
$ git clone https://github.com/Pumgrana/plugin.git plugin
$ cd plugin
$ npm install                   # Install Node.js components listed in ./package.json
```

#### How to start dev mode ?

```shell
$ npm start                     # or: env UV_THREADPOOL_SIZE=100 DEBUG=false NODE_ENV=DEV node bin/hot.js
```

This will start a lightweight development server (webpack dev server) on **http://localhost:3000** with live hot reloading.

## Chrome

#### Build the chrome extension

```shell
$ npm run chrome
```

#### Load the extension in chrome
* Visit chrome://extensions in your browser.
* Ensure that the Developer mode checkbox in the top right-hand corner is checked.
* Click Load unpacked extension… to pop up a file-selection dialog.
* Navigate to the directory in which your extension files live: `./chrome_extension/`
