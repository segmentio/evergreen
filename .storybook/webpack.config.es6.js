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

  console.log('storybookBaseConfig', storybookBaseConfig.resolve)

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
      // Unsure if this is the rigth way of doing it, but to make stories work
      // with unpublished/local packages this checks in packages before node_modules
      modules: [path.join(__dirname, '../packages'), 'node_modules'],
    },
    module: {
      ...storybookBaseConfig.module,
      rules,
    },
  }
}
