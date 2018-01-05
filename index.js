const path = require('path')
const merge = require('webpack-merge')
const globToRe = require('glob-to-regexp')
const webpack = require('webpack')

class Webpuck {
  constructor() {
    this.config = {}
    this.plugins = {}

    // TODO: uglify css as well
    this.use('uglify', () => {
      return {
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
          })
        ]
      }
    })
  }

  src(filepaths) {
    this.config.entry = filepaths
    return this
  }

  dest(outputPath) {
    const dirname = path.dirname(outputPath)
    const filename = path.basename(outputPath)
    this.config.output = {
      path: dirname,
      publicPath: '/',
      filename
    }
    return this
  }

  asset(globs, loader, options) {
    globs = Array.isArray(globs) ? globs : [globs]
    globs = globs.map(glob => typeof glob === 'string' ? globToRe(glob) : glob)
    this.config = merge(this.config, {
      module: {
        rules: [
          {
            test: {
              and: globs
            },
            loader,
            options
          }
        ]
      }
    })
    return this
  }

  use(name, plugin) {
    this.plugins[name] = () => {
      this.config = merge(this.config, plugin())
    }
    return this
  }

  extends(name) {
    if (Array.isArray(name)) {
      name.forEach(n => this.extends(n))
    } else {
      this.plugins[name]()
    }
    return this
  }

  getConfig() {
    return this.config
  }
}

module.exports = function (options) {
  return new Webpuck(options)
}
