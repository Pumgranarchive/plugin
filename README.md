# Pumgrana Plugin

## Install

Just [clone](github-windows://openRepo/https://github.com/Pumgrana/plugin.git) the repo
and start :

```shell
$ git clone https://github.com/Pumgrana/plugin.git plugin
$ cd plugin
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to use (dev mode) ?

```shell
$ npm start                     # or: env UV_THREADPOOL_SIZE=100 node server.js
```

This will start a lightweight development server with webpack : **http://localhost:3000**.

### How to build (production mode) ?

```shell
$ npm run build                # or: env UV_THREADPOOL_SIZE=100 webpack --production
```

## Chrome

### Build the chrome extension

```shell
$ npm run build chrome
```

### Load the extension in chrome
* Visit chrome://extensions in your browser.
* Ensure that the Developer mode checkbox in the top right-hand corner is checked.
* Click Load unpacked extension… to pop up a file-selection dialog.
* Navigate to the directory in which your extension files live: `./chrome_extension/`
