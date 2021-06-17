var debug = process.env.NODE_ENV !== 'production'
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  assetPrefix: !debug ? 'https://cdn.statically.io/gh/segmentio/evergreen/gh-pages/' : '',
}
