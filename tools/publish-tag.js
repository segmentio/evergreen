#!/usr/bin/env node
'use strict'
const path = require('path')
const fs = require('fs')
const execa = require('execa')

const TAG_REGEX = /[^@]+@[0-9]+(\.[0-9]+)*/

const tag = process.argv[2]

if (typeof tag !== 'string') {
  console.error('Tag required')
  process.exit(1)
}

if (!TAG_REGEX.test(tag)) {
  console.error('Invalid tag')
  process.exit(1)
}

const [packageName, packageVersion] = tag.split('@')

const packagePath = path.join(__dirname, '..', 'packages', packageName)
const packageJsonPath = path.join(packagePath, 'package.json')

if (!fs.existsSync(packageJsonPath)) {
  console.error('Package doesn՚t exist')
  process.exit(1)
}

const pkg = require(packageJsonPath)

if (pkg.version !== packageVersion) {
  console.error('Version mismatch')
  process.exit(1)
}

execa('npm', ['publish'], {
  cwd: packagePath,
  stdio: 'inherit'
})
  .then(() => {
    process.exitCode = 0
  })
  .catch(() => {
    process.exitCode = 1
  })
