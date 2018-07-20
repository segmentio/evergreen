const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const componentRoutes = require('./src/componentRoutes')

const componentTemplate = path.resolve(`src/templates/component.js`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  componentRoutes.forEach(({ name, path }) => {
    createPage({
      path,
      component: componentTemplate,
      // If you have a layout component at src/layouts/blog-layout.js
      // layout: `blog-layout`,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        // Path,
        name
      }
    })
  })
}

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
      modules: [path.join(__dirname, 'node_modules')]
    }
  })
}
