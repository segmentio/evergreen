#!/usr/bin/env node
'use strict'
const path = require('path')
const fs = require('fs-extra')
const { IconSvgPaths16, IconSvgPaths20 } = require('@blueprintjs/icons')
const camelCase = require('camelcase')
const prettier = require('prettier')

const iconsPath = path.resolve(__dirname, '../src/icons/src/generated')
const iconsIndexPath = path.resolve(__dirname, '../src/icons/index.js')
const indexPath = path.resolve(__dirname, '../src/index.js')

async function main() {
  const prettierConfig = await prettier.resolveConfig(__dirname)
  await fs.emptyDir(iconsPath)
  const iconNames = []

  const promises = Object.keys(IconSvgPaths16).map(name => {
    const iconName = camelCase(name, { pascalCase: true }) + 'Icon'
    const svgPaths16 = IconSvgPaths16[name]
    const svgPaths20 = IconSvgPaths20[name]
    iconNames.push(iconName)

    let iconFile = `
import React, { PureComponent } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  '${svgPaths16.join(`',\n  '`)}'
]
const svgPaths20 = [
  '${svgPaths20.join(`',\n  '`)}'
]

export default class ${iconName} extends PureComponent {
  render() {
    return (
      <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...this.props} />
    )
  }
}
`
    const iconPath = path.join(iconsPath, `${iconName}.js`)
    iconFile = prettier.format(iconFile, {
      ...prettierConfig,
      filepath: iconPath
    })

    return fs.writeFile(iconPath, iconFile)
  })

  await Promise.all(promises)

  let iconsIndexFile = iconNames
    .map(iconName => {
      return `export { default as ${iconName} } from './src/generated/${iconName}'\n`
    })
    .join('')

  iconsIndexFile = prettier.format(iconsIndexFile, {
    ...prettierConfig,
    filepath: iconsIndexPath
  })

  await fs.writeFile(iconsIndexPath, iconsIndexFile)

  const iconsExport = `
/* Start generated icons */
export {
  ${iconNames.join(',\n  ')}
} from './icons'
/* End generated icons */
`.trim()

  let indexContent = await fs.readFile(indexPath, 'utf8')
  indexContent = indexContent.replace(
    /\/\* Start generated icons \*\/[\s\S]*?\/\* End generated icons \*\//i,
    iconsExport
  )

  indexContent = prettier.format(indexContent, {
    ...prettierConfig,
    filepath: indexPath
  })

  await fs.writeFile(indexPath, indexContent)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
