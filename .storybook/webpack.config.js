const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const webpack = require('webpack')

module.exports = storybookBaseConfig => {
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
        },
        {
          test: /\.(json)/,
          loader: 'json-loader'
        },
        {
          test: /\.(ts|tsx)$/,
          include: [SRC_PATH],
          use: [
            {
              loader: require.resolve('awesome-typescript-loader'),
              options: {
                configFileName: './.storybook/tsconfig.json'
              }
            },
            { loader: require.resolve('react-docgen-typescript-loader') }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx']
    }
  }
}
