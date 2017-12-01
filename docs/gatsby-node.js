const Path = require('path')
const components = require('./src/components')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const componentTemplate = Path.resolve(`src/templates/component.js`)

  components.forEach(({ name }) => {
    const path = name

    createPage({
      path,
      component: componentTemplate,
      // If you have a layout component at src/layouts/blog-layout.js
      // layout: `blog-layout`,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path,
      },
    })
  })
}
