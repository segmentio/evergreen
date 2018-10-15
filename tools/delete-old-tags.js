#!/usr/bin/env node
'use strict'
const execa = require('execa')

async function getTags() {
  const result = await execa('git', ['tag', '--list'])
  return result.stdout.split('\n')
}

async function getNewTags() {
  const result = await execa('npm', ['info', '--json', 'evergreen-ui'])
  return JSON.parse(result.stdout).versions.map(version => 'v' + version)
}

async function main() {
  const tags = await getTags()
  const newTags = await getNewTags()
  const oldTags = tags.filter(tag => !newTags.includes(tag))
  await execa('git', ['push', 'origin', '--delete', ...oldTags])
  await execa('git', ['tag', '-d', ...oldTags])
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
