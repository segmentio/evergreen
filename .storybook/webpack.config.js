const path = require('path')
const webpack = require('webpack')

module.exports = function(storybookBaseConfig, configType) {
  storybookBaseConfig.devtool = 'source-map'
  storybookBaseConfig.resolve.alias = {
    react: path.join(
      __dirname,
      '../node_modules/react/dist/react-with-addons.js'
    ),
    'react-dom': path.join(
      __dirname,
      '../node_modules/react-dom/dist/react-dom.js'
    )
  }

  storybookBaseConfig.module.rules.splice(
    -1,
    0,
    {
      test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
      loader: 'url-loader',
    },
    {
      test: /\.(blob)/,
      loader: 'file-loader',
    }
  )

  storybookBaseConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  )

  // Return the altered config
  return storybookBaseConfig
}
