const path = require('path')

module.exports = function(storybookBaseConfig, configType) {
  storybookBaseConfig.debug = true
  storybookBaseConfig.devtool = 'source-map'
  storybookBaseConfig.resolve.alias = {
    react: path.join(
      __dirname,
      '../node_modules/react/dist/react-with-addons.js',
    ),
    'react-dom': path.join(
      __dirname,
      '../node_modules/react-dom/dist/react-dom.js',
    ),
  }

  storybookBaseConfig.module.loaders.splice(
    -1,
    0,
    {
      test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
      loader: 'url-loader',
    },
    {
      test: /\.(blob)/,
      loader: 'file-loader',
    },
  )

  storybookBaseConfig.resolve.fallback = [path.join(__dirname, '../packages')]

  // Return the altered config
  return storybookBaseConfig
}
