const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example/,
          use: [
            {
              loader: 'raw-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      // See https://github.com/FormidableLabs/react-live/issues/5
      new webpack.IgnorePlugin(/^(xor|props)$/)
    ],
    resolve: {
      // Force Gatsby to look for dependencies within the local node_modules from docs.
      modules: ['node_modules'],
      alias: {
        'evergreen-ui': path.resolve(__dirname, '../src/index.js'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  })
}
