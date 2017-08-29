const path = require('path')

module.exports = storybookBaseConfig => {
  const loaders = [...storybookBaseConfig.module.loaders]
  loaders.splice(
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
    {
      test: /\.(json)/,
      loader: 'json-loader',
    },
  )

  // Return the altered config
  return {
    ...storybookBaseConfig,
    debug: true,
    devtool: 'source-map',
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
      fallback: [path.join(__dirname, '../packages')],
    },
    module: {
      ...storybookBaseConfig.module,
      loaders,
    },
  }
}
