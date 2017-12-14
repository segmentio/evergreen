const glob = require('glob')

module.exports = function noop() {}
module.exports.pitch = function pitch() {
  // This is a temp fix for storybooks. If we are running static builds we'll have the PACKAGE var
  // and we need to work from within that package. Otherwise we are running the server and we know
  // we are inside the packages directory already
  const packagesRoot = process.env.PACKAGE
    ? `${__dirname}/../../packages/${process.env.PACKAGE}`
    : process.cwd()

  // Prevent node_modules from being loaded
  const storiesPattern = `${packagesRoot}/packages/*/stories/**/*.stories.js`
  const storybookFiles = glob.sync(storiesPattern, { cwd: __dirname })

  console.log('require the following stories:')

  // Pretty print the stories that are being loaded for testing
  console.log(
    JSON.stringify(
      storybookFiles.map(x => x.substr(x.indexOf('evergreen/packages'))),
      null,
      2
    )
  )

  console.log(`Loading ${storybookFiles.length} storybook files`)

  const storyRequireStatements = storybookFiles
    .map(storyPath => `require(${JSON.stringify(storyPath)});`)
    .join('\n')

  return storyRequireStatements
}
