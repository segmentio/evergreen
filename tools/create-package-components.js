/**
 * This script scaffolds React component(s) inside a package.
 *
 * For the following command:
 *
 * `npm run create-package:component package-name ComponentName ComponentName2`
 *
 * The following file tree will be generated:
 *
 * /packages/evergreen-{pacakage-name}
 * ├── /src/
 * │   │-  /components/
 * |   │   |── ComponentName.js
 * |   │   └── ComponentName2.js
 * │   └── index.js
 * |
 * ├── /stories/
 * │   |── ComponentName.stories.js
 * │   └── ComponentName2.stories.js
 * └── package.json
 *
 */
const path = require('path')
const fs = require('fs-extra')
const task = require('./task')

const componentTemplate = require('./component-template').default
const storiesTemplate = require('./component-stories-template').default

const packageName = process.argv[2]

module.exports = task('create-package-components', async () => {
  const componentNames = [...process.argv]
  componentNames.splice(0, 3)

  if (!packageName) {
    throw new Error(
      'Missing argument, packageName: `npm run create-package:components package-name ComponentName`'
    )
  }

  const packageDir = path.join('packages', packageName)

  // Check if directory already exist
  const packageDirExistsAlready = await fs.pathExists(packageDir)

  if (packageDirExistsAlready) {
    throw new Error(`Directory already exists: /packages/${packageName}`)
  }

  // Create directory
  await fs.ensureDir(packageDir)

  const packageJson = {
    name: packageName,
    version: '0.0.0',
    description: `React components: ${componentNames.join(', ')}`,
    main: 'lib/index.js',
    keywords: ['evergreen', 'segment', 'ui', 'react', ...componentNames],
    author: `Segment`,
    license: 'MIT',
    // Unsure if this should be peer or regular dependency
    dependencies: {
      'ui-box': '^0.5.4',
      'prop-types': '^15.0.0'
    },
    peerDependencies: {
      react: '^16.0.0'
    },
    xo: false
  }

  console.info('Package name will be: ', packageName)

  await fs.writeFile(
    path.join(packageDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )

  await fs.writeFile(
    path.join(packageDir, 'README.md'),
    `# ${componentNames[0]}`
  )

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, 'src'))
  await fs.writeFile(
    path.join(packageDir, 'src', 'index.js'),
    getIndexFile(componentNames)
  )

  await fs.ensureDir(path.join(packageDir, 'src/components'))

  await componentNames.forEach(async componentName =>
    createComponent({ componentName, packageDir })
  )

  await fs.ensureDir(path.join(packageDir, 'stories'))
  await fs.writeFile(
    path.join(packageDir, 'stories', `index.stories.js`),
    storiesTemplate({ packageName, componentNames })
  )
})

async function createComponent({ componentName, packageDir }) {
  if (!componentName) {
    throw new Error(
      'Missing argument, use: `npm run create-package:component ComponentName`'
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(
      `Wrong format for '${componentName}': use CamelCase for ComponentName`
    )
  }

  await fs.ensureDir(path.join(packageDir, 'src/components'))
  await fs.writeFile(
    path.join(packageDir, 'src/components', `${componentName}.js`),
    componentTemplate({ componentName })
  )
}

function getIndexFile(componentNames) {
  const indexFile = []

  componentNames.forEach(componentName => {
    indexFile.push(
      `import ${componentName} from './components/${componentName}'`
    )
  })

  indexFile.push('')
  // Export the first component as the default
  indexFile.push(`export default ${componentNames[0]}`)
  indexFile.push(`export {`)
  componentNames.forEach(componentName => {
    indexFile.push(`  ${componentName},`)
  })
  indexFile.push(`}`)

  return indexFile.join('\n')
}

function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase()
}
