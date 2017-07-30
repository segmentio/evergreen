/**
 * This script scaffolds a React component inside packages.
 * The following file tree will be generated:
 *
 * /packages/evergreen-{pacakage-name}
 * ├── /src/
 * │   └── index.js
 * ├── /stories/
 * │   └── ComponentName.stories.js
 * └── package.json
 *
 */
const task = require('./task')
const fs = require('fs-extra')
const path = require('path')

const componentName = process.argv[2]

module.exports = task('create-package-component', async () => {
  if (!componentName) {
    throw new Error(
      'Missing argument, use: `npm run create-package:component ComponentName`',
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(
      `Wrong format for '${componentName}': use CamelCase for ComponentName`,
    )
  }

  const hyphenatedComponentName = camelCaseToHyphens(componentName)
  const packageDir = path.join('packages', hyphenatedComponentName)

  // Check if directory already exist
  const packageDirExistsAlready = await fs.pathExists(packageDir)

  if (packageDirExistsAlready) {
    throw new Error(
      `Directory already exists: /packages/${hyphenatedComponentName}`,
    )
  }

  // Create directory
  await fs.ensureDir(packageDir)

  const packageJson = {
    name: `evergreen-${hyphenatedComponentName}`,
    version: '1.0.0',
    description: `React component: ${componentName}`,
    main: 'lib/index.js',
    keywords: ['evergreen', 'segment', 'ui', 'react', hyphenatedComponentName],
    author: `Segment`,
    license: 'MIT',

    peerDependencies: {
      react: '^0.14.0 || ^15.0.0',
      'prop-types': '^15.0.0',
      'ui-box': '^0.1.2',
    },
  }

  console.info('Package name will be: ', hyphenatedComponentName)

  await fs.writeFile(
    path.join(packageDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  )

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, 'src'))
  await fs.writeFile(path.join(packageDir, 'src', 'index.js'), getIndexFile())

  await fs.ensureDir(path.join(packageDir, 'stories'))
  await fs.writeFile(
    path.join(packageDir, 'stories', `${componentName}.stories.js`),
    getIndexStoriesFile(),
  )
})

function getIndexFile() {
  let indexFile
  try {
    indexFile = fs.readFileSync(
      path.join(__dirname, '/component-template/index.txt'),
      'utf8',
    )
  } catch (e) {
    console.error(e)
  }

  return replaceAll(indexFile, 'ComponentName', componentName)
}

function getIndexStoriesFile() {
  let indexStoriesFile
  try {
    indexStoriesFile = fs.readFileSync(
      path.join(__dirname, '/component-template/index.stories.txt'),
      'utf8',
    )
  } catch (e) {
    console.error(e)
  }

  return replaceAll(indexStoriesFile, 'ComponentName', componentName)
}

function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase()
}

function camelCaseToHyphens(word) {
  return word.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`).substr(1)
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace)
}
