const Path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://evergreen.segment.com`
      }
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-mdx`,
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
