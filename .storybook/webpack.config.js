const webpack = require('webpack')

module.exports = ({ config: storybookBaseConfig }) => {
  // Return the altered config
  return {
    ...storybookBaseConfig,
    plugins: [
      ...storybookBaseConfig.plugins,
      new webpack.LoaderOptionsPlugin({
        debug: true
      })
    ],
    module: {
      ...storybookBaseConfig.module,
      rules: [
        ...storybookBaseConfig.module.rules,
        {
          test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(blob)/,
          loader: 'file-loader'
        }
      ]
    }
  }
}
