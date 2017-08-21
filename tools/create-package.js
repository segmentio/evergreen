/**
 * This script scaffolds a bare bones package.
 * The following file tree will be generated:
 *
 * /packages/evergreen-{pacakage-name}
 * ├── /src/
 * │   └── index.js
 * └── package.json
 *
 */
const task = require('./task')
const fs = require('fs-extra')
const path = require('path')

const packageName = process.argv[2]

module.exports = task('create-package-js', async () => {
  if (!packageName) {
    throw new Error(
      'Missing argument, use: `npm run create-package package-name`',
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
    version: '1.0.0',
    description: `JS package: ${packageName}`,
    main: 'lib/index.js',
    keywords: ['evergreen', 'segment', 'ui', packageName],
    author: `Segment`,
    license: 'MIT',
  }

  console.info('Package name will be: ', packageName)

  await fs.writeFile(
    path.join(packageDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  )

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, 'src'))
  await fs.writeFile(
    path.join(packageDir, 'src', 'index.js'),
    'export default {}',
  )
})
