const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const webpack = require('webpack')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
    loader: 'url-loader'
  })
  defaultConfig.module.rules.push({
    test: /\.(blob)/,
    loader: 'file-loader'
  })
  defaultConfig.module.rules.push({
    test: /\.(json)/,
    loader: 'json-loader'
  })
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    loader: require.resolve('awesome-typescript-loader')
  })
  defaultConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  )
  defaultConfig.plugins.push(new TSDocgenPlugin())
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  return defaultConfig
}
