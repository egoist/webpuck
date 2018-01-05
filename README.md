
# webpuck

[![NPM version](https://img.shields.io/npm/v/webpuck.svg?style=flat)](https://npmjs.com/package/webpuck) [![NPM downloads](https://img.shields.io/npm/dm/webpuck.svg?style=flat)](https://npmjs.com/package/webpuck) [![CircleCI](https://circleci.com/gh/egoist/webpuck/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/webpuck/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

It's not that hard...

## Install

```bash
yarn add webpuck --dev
```

## Usage

In your `webpack.config.js`:

```js
const app = webpuck()

app.src('src/index.js')

app.asset('src/**/*.js', 'babel-loader')

app.dest('dist/main.js')

// Production optimizations
if (process.env.NODE_ENV === true) {
  app.extends('uglify')
}

module.exports = app.getConfig() 
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**webpuck** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/webpuck/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
