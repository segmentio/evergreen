import path from 'path'
import fs from 'fs-extra'
import { titleCase } from 'humanize-plus'
import task from './task'
/**
 * This script scaffolds a bare bones package.
 *
 * For the following command:
 *
 * `yarn run create-package package-name`
 *
 * The following file tree will be generated:
 *
 * /src/package-name
 * ├── /src/
 * └── index.ts
 *
 */

const packageName = process.argv[2]

module.exports = task('create-package', async () => {
  if (!packageName) {
    throw new Error('Missing package name argument, use: `yarn run create-package [package-name]`')
  }

  const packageDir = path.join('src', packageName)

  // Check if directory already exist
  const packageDirExistsAlready = await fs.pathExists(packageDir)

  if (packageDirExistsAlready) {
    throw new Error(`Directory already exists: ${packageDir}`)
  }

  // Create directory
  await fs.ensureDir(packageDir)

  // eslint-disable-next-line no-console
  console.info('Package name will be:', packageName)

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, 'src'))
  await fs.writeFile(
    path.join(packageDir, 'index.ts'),
    `export { default as ${titleCase(packageName).replace(/-/g, '')} } from './src/${packageName}'`
  )
})
