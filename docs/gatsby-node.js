const path = require('path')

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
    resolve: {
      // Force Gatsby to look for dependencies within the local node_modules from docs.
      modules: ['node_modules'],
      alias: {
        react: path.resolve(__dirname, '../node_modules/react'),
        'evergreen-ui': path.resolve(__dirname, '../src/index.js'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  })
}
