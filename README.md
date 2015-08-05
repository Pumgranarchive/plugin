# Pumgrana Plugin

## Install

Just [clone](github-windows://openRepo/https://github.com/Pumgrana/plugin.git) the repo
and start :

```shell
$ git clone https://github.com/Pumgrana/plugin.git plugin
$ cd plugin
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to start dev mode ?

```shell
$ npm start                     # or: env UV_THREADPOOL_SIZE=100 DEBUG=false NODE_ENV=DEV node server.js
```

This will start a lightweight development server (webpack dev server) on **http://localhost:3000** with live hot reloading.

## Chrome

### Build the chrome extension

```shell
$ npm run chrome
```

### Load the extension in chrome
* Visit chrome://extensions in your browser.
* Ensure that the Developer mode checkbox in the top right-hand corner is checked.
* Click Load unpacked extension… to pop up a file-selection dialog.
* Navigate to the directory in which your extension files live: `./chrome_extension/`
