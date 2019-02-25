#!/usr/bin/env node
'use strict'
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
 * └── index.js
 *
 */
const path = require('path')
const fs = require('fs-extra')
const task = require('./task')

const packageName = process.argv[2]

module.exports = task('create-package-js', async () => {
  if (!packageName) {
    throw new Error(
      'Missing package name argument, use: `yarn run create-package [package-name]`'
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
    `export derp from './src/derp'`
  )
})
