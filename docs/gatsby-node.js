const Path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const components = require('./src/components')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const componentTemplate = Path.resolve(`src/templates/component.js`)

  components.forEach(({ name }) => {
    const path = `/components/${name}`

    createPage({
      path,
      component: componentTemplate,
      // If you have a layout component at src/layouts/blog-layout.js
      // layout: `blog-layout`,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path
      }
    })
  })
}

exports.modifyWebpackConfig = ({ config }) => {
  config.loader('raw-loader', {
    test: /\.example$/
  })

  // See https://github.com/FormidableLabs/react-live/issues/5
  config.plugin('ignore', () => new webpack.IgnorePlugin(/^(xor|props)$/))

  return config
}
