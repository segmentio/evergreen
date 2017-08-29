const path = require('path')
const webpack = require('webpack')

module.exports = storybookBaseConfig => {
  const rules = [
    ...storybookBaseConfig.module.rules,
    {
      test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
      loader: 'url-loader',
    },
    {
      test: /\.(blob)/,
      loader: 'file-loader',
    },
    {
      test: /\.(json)/,
      loader: 'json-loader',
    },
  ]

  // Return the altered config
  return {
    ...storybookBaseConfig,
    plugins: [
      ...storybookBaseConfig.plugins,
      new webpack.LoaderOptionsPlugin({
        debug: true,
      }),
    ],
    resolve: {
      ...storybookBaseConfig.resolve,
      alias: {
        react: path.join(
          __dirname,
          '../node_modules/react/dist/react-with-addons.js',
        ),
        'react-dom': path.join(
          __dirname,
          '../node_modules/react-dom/dist/react-dom.js',
        ),
      },
    },
    module: {
      ...storybookBaseConfig.module,
      rules,
    },
  }
}
