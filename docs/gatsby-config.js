const Path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Page.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: Path.resolve(__dirname, `../src/`),
        name: 'evergreen'
      }
    },
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss'
  ],
  siteMetadata: {
    title: 'Evergreen documentation',
    description: 'Evergreen Design System by Segment'
  }
}
