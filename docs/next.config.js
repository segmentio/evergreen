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

  async redirects() {
    return [
      {
        source: '/introduction/v6-migration-guide',
        destination: '/introduction/migrations/v6',
        permanent: true,
      },
      {
        source: '/components/nudge',
        destination: '/components/pulsar',
        permanent: true,
      },
      {
        source: '/components/segmented-control',
        destination: '/components/group',
        permanent: true,
      },
    ]
  },
}
