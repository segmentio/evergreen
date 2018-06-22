const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const postcssCssnext = require('postcss-cssnext')
const poscssImport = require('postcss-import')
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
        path,
        name
      }
    })
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from'
  })
}

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example/,
          use: [{ loader: 'raw-loader' }]
        },
        {
          test: /\.css$/,
          use: [
            loaders.miniCssExtract(),

            // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            loaders.css({ importLoaders: 1 }),

            loaders.postcss({
              ident: 'postcss',
              // Use CSSNext Here which came bundled
              plugins: () => [poscssImport(), postcssCssnext()]
            })
          ]
        }
      ]
    },
    // See https://github.com/FormidableLabs/react-live/issues/5
    plugins: [new webpack.IgnorePlugin(/^(xor|props)$/)],
    resolve: {
      // Force Gatsby to look for dependencies within the local node_modules from docs.
      modules: [path.join(__dirname, 'node_modules')]
    }
  })

  const configAfterSettings = getConfig()

  // https://github.com/gatsbyjs/gatsby/issues/5778
  // Losing my mind here. The default CSS rules need to be undone.
  const finalRules = configAfterSettings.module.rules.filter(rule => {
    // There is a rule which has a `oneOf`
    if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
      // Nuke this rule.
      return JSON.stringify(rule).indexOf('style-loader') === -1
    }
    return true
  })

  // So much for immutability.
  configAfterSettings.module.rules = finalRules
  actions.replaceWebpackConfig(configAfterSettings)
}
