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
        // Path,
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

const CSS_PATTERN = /\.css$/
const MODULE_CSS_PATTERN = /\.module\.css$/

const isBuiltInCssRule = rule =>
  rule.test &&
  (rule.test.toString() === CSS_PATTERN.toString() ||
    rule.test.toString() === MODULE_CSS_PATTERN.toString())

const removeBuiltInCssLoaders = config => {
  config.module.rules = config.module.rules.filter(
    rule =>
      Array.isArray(rule.oneOf)
        ? rule.oneOf.every(x => !isBuiltInCssRule(x))
        : true
  )

  return config
}

exports.onCreateWebpackConfig = ({ actions, stage, loaders, getConfig }) => {
  const isSSR = stage.includes(`html`)

  // https://github.com/gatsbyjs/gatsby/pull/6217/files
  actions.replaceWebpackConfig(removeBuiltInCssLoaders(getConfig()))

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
        },
        {
          test: CSS_PATTERN,
          use: isSSR
            ? [loaders.null()]
            : [
                loaders.miniCssExtract(),

                // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                loaders.css({
                  importLoaders: 1
                }),

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
}
