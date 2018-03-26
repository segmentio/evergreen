#!/usr/bin/env node
'use strict'
/**
 * This script scaffolds a bare bones docs template inside of a package.
 *
 * For the following command:
 *
 * `yarn run create-docs-template package-name`
 *
 * The following file tree will be generated:
 *
 * /src/pacakage-name/docs
 * ├── index.js
 * └── /examples/
 *     └── {ComponentName}-basic.example
 *
 */

const path = require('path')
const fs = require('fs-extra')
const task = require('./task')
const docsIndexTemplate = require('./docs-index-template')

const packageName = process.argv[2]

module.exports = task('create-docs-template', async () => {
  const componentNames = [...process.argv]
  componentNames.splice(0, 3)

  console.log('component names:', componentNames)

  if (!packageName) {
    throw new Error(
      'Missing package name argument, use: `yarn run create-docs-template [package-name]`'
    )
  }

  const packageDir = path.join('src', packageName)
  const docsDir = path.join(packageDir, 'docs')
  const examplesDir = path.join(docsDir, 'examples')

  // Check if directory already exist
  const docsDirExistsAlready = await fs.pathExists(docsDir)

  if (docsDirExistsAlready) {
    throw new Error(`Directory already exists: ${docsDir}`)
  }

  // Create directory
  await fs.ensureDir(docsDir)
  await fs.ensureDir(examplesDir)

  await fs.writeFile(
    path.join(docsDir, 'index.js'),
    docsIndexTemplate({ packageName, componentNames })
  )

  await Promise.all(
    componentNames.map(async name => {
      return fs.writeFile(
        path.join(examplesDir, `${name}-basic.example`),
        `<${name} />`
      )
    })
  )
})
