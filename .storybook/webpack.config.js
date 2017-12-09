// Storybook config does not work with ES6 just yet.
// This is a workaround.
// https://github.com/storybooks/storybook/issues/155
require('babel-register')
module.exports = require('./webpack.config.es6.js')
