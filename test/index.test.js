const webpuck = require('../')

test('main', () => {
  const app = webpuck()

  app.src('src/index.js')
  .dest('dist/bundle.js')
  .asset(['**/*.js', '!**/node_modules/**'], 'babel-loader')

  app.extends('uglify')

  expect(app.getConfig()).toMatchSnapshot()
})
