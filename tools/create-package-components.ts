import path from 'path'
import fs from 'fs-extra'
import componentStoriesTemplate from './component-stories-template'
import componentTemplate from './component-template'
import task from './task'

/**
 * This script scaffolds React component(s) inside a package.
 *
 * For the following command:
 *
 * `yarn run create-package:components package-name ComponentName ComponentName2`
 *
 * The following file tree will be generated:
 *
 * /src/package-name
 * ├── /src/
 * |   │── ComponentName.ts
 * |   └── ComponentName2.ts
 * ├── /stories/
 * │   └── index.stories.js
 * └── index.ts
 *
 */

const packageName = process.argv[2]

module.exports = task('create-package-components', async () => {
  const componentNames = [...process.argv]
  componentNames.splice(0, 3)

  if (!packageName) {
    throw new Error(
      'Missing package name argument, use: `yarn run create-package:components [package-name] [ComponentName]`'
    )
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
  await fs.writeFile(path.join(packageDir, 'index.ts'), getIndexFile(componentNames))

  await Promise.all(componentNames.map(componentName => createComponent(componentName, packageDir)))

  // Scaffold out component stories
  await fs.ensureDir(path.join(packageDir, 'stories'))
  await fs.writeFile(
    path.join(packageDir, 'stories', 'index.stories.js'),
    componentStoriesTemplate({ packageName, componentNames })
  )
})

async function createComponent(componentName: string, packageDir: string): Promise<void> {
  if (!componentName) {
    throw new Error(
      'Missing component name argument, use: `yarn run create-package:components [package-name] [ComponentName]`'
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(`Wrong format for '${componentName}': use CamelCase for ComponentName`)
  }

  await fs.writeFile(path.join(packageDir, 'src', `${componentName}.tsx`), componentTemplate({ componentName }))
}

function getIndexFile(componentNames: string[]): string {
  return componentNames
    .map(componentName => `export { default as ${componentName}, ${componentName}Props } from './src/${componentName}'`)
    .join('\n')
}

function initialIsCapital(word: string): boolean {
  return word[0] !== word[0].toLowerCase()
}
