module.exports = (_baseConfig, _env, config) => {
  config.module.rules.push(
    ...[
      {
        test: /\.(png\?.*|jpg\?.*|jpg|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(blob)/,
        loader: 'file-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: require.resolve('awesome-typescript-loader') },
          { loader: require.resolve('react-docgen-typescript-loader') }
        ]
      }
    ]
  )

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
