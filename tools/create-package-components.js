#!/usr/bin/env node
'use strict'
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
 * |   │── ComponentName.js
 * |   └── ComponentName2.js
 * ├── /stories/
 * │   └── index.stories.js
 * └── index.js
 *
 */
const path = require('path')
const fs = require('fs-extra')
const task = require('./task')

const componentTemplate = require('./component-template')
const componentStoriesTemplate = require('./component-stories-template')

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

  console.info('Package name will be:', packageName)

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, 'src'))
  await fs.writeFile(
    path.join(packageDir, 'index.js'),
    getIndexFile(componentNames)
  )

  await Promise.all(
    componentNames.map(componentName =>
      createComponent({ componentName, packageDir })
    )
  )

  await fs.ensureDir(path.join(packageDir, 'stories'))
  await fs.writeFile(
    path.join(packageDir, 'stories', `index.stories.js`),
    componentStoriesTemplate({ packageName, componentNames })
  )
})

async function createComponent({ componentName, packageDir }) {
  if (!componentName) {
    throw new Error(
      'Missing component name argument, use: `yarn run create-package:components [package-name] [ComponentName]`'
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(
      `Wrong format for '${componentName}': use CamelCase for ComponentName`
    )
  }

  await fs.writeFile(
    path.join(packageDir, 'src', `${componentName}.js`),
    componentTemplate({ componentName })
  )
}

function getIndexFile(componentNames) {
  return componentNames
    .map(
      componentName => `export ${componentName} from './src/${componentName}'`
    )
    .join('\n')
}

function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase()
}
