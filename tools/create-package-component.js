/**
 * This script scaffolds a React component inside packages.
 * The following file tree will be generated:
 *
 * /packages/evergreen-{pacakage-name}
 * ├── /src/
 * │   │── index.js
 * │   └── index.test.js
 * └── package.json
 *
 */
const task = require('./task')
// const fs = require('fs-extra')

const componentName = process.argv[2]

module.exports = task('create-package-component', () => {
  if (!componentName) {
    throw new Error(
      'Missing argument, use: `npm run create-package-component ComponentName`',
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(
      `Wrong format for '${componentName}': use CamelCase for ComponentName`,
    )
  }

  const hyphenatedComponentName = camelCaseToHyphens(componentName)

  const packageJson = {
    name: `evergreen-${hyphenatedComponentName}`,
    version: '1.0.0',
    description: `React component: ${componentName}`,
    main: 'lib/index.js',
    keywords: ['evergreen', 'segment', 'ui', 'react'],
    author: `Segment`,
    license: 'MIT',

    // Declare peer dependencies for main dependencies
    peerDependencies: {
      react: '^0.14.0 || ^15.0.0',
      'prop-types': '^15.0.0',
      'ui-box': '^0.1.2',
    },
  }

  const stringifiedPackageJson = JSON.stringify(packageJson, null, 2)

  console.info('Package name will be: ', hyphenatedComponentName)
  console.info('package.json will be: ', stringifiedPackageJson)
})

function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase()
}

function camelCaseToHyphens(word) {
  return word.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`).substr(1)
}
