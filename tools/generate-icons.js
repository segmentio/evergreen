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
const iconNamesPath = path.resolve(
  __dirname,
  '../src/icons/src/generated/IconNames.js'
)
const iconNamesMapperPath = path.resolve(
  __dirname,
  '../src/icons/src/generated/IconNameMapper.js'
)
const fileHeader = `// This is a generated file. DO NOT modify directly.\n\n`

async function main() {
  const prettierConfig = await prettier.resolveConfig(__dirname)
  await fs.emptyDir(iconsPath)
  const rawIconNames = Object.keys(IconSvgPaths16)
  const iconNames = []

  const promises = Object.keys(IconSvgPaths16).map(name => {
    const iconName = camelCase(name, { pascalCase: true }) + 'Icon'
    const svgPaths16 = IconSvgPaths16[name]
    const svgPaths20 = IconSvgPaths20[name]
    iconNames.push(iconName)

    let iconFile = `
import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  '${svgPaths16.join(`',\n  '`)}'
]
const svgPaths20 = [
  '${svgPaths20.join(`',\n  '`)}'
]

export const ${iconName} = memo(forwardRef((props, ref) => (
  <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} {...props} />
)))
`
    const iconPath = path.join(iconsPath, `${iconName}.js`)
    iconFile = prettier.format(iconFile, {
      ...prettierConfig,
      filepath: iconPath
    })

    return fs.writeFile(iconPath, iconFile)
  })

  await Promise.all(promises)

  let iconNamesFile = rawIconNames
    .map(iconName => {
      return `export const ${iconName
        .toUpperCase()
        .replace(/-/gi, '_')} = '${iconName}'`
    })
    .join('\n')

  iconNamesFile = prettier.format(`${fileHeader}${iconNamesFile}`, {
    ...prettierConfig,
    filepath: iconNamesPath
  })

  await fs.writeFile(iconNamesPath, iconNamesFile)

  const iconNamesMap = rawIconNames.reduce((agg, name) => {
    agg[name] = camelCase(name, { pascalCase: true }) + 'Icon'
    return agg
  }, {})

  let iconNamesMapperFile = `
    ${fileHeader}
    export const IconNameMapper = ${JSON.stringify(iconNamesMap)}
  `

  iconNamesMapperFile = prettier.format(iconNamesMapperFile, {
    ...prettierConfig,
    filepath: iconNamesMapperPath
  })

  await fs.writeFile(iconNamesMapperPath, iconNamesMapperFile)

  let iconsIndexFile = iconNames
    .map(iconName => {
      return `export { ${iconName} } from './src/generated/${iconName}'`
    })
    .join('\n')

  const iconNamesExport = `
    import * as IconNames from './src/generated/IconNames'\n
    export { IconNames }\n
    export { IconNameMapper } from './src/generated/IconNameMapper'\n
  `

  iconsIndexFile = prettier.format(
    `${fileHeader}${iconNamesExport}${iconsIndexFile}`,
    {
      ...prettierConfig,
      filepath: iconsIndexPath
    }
  )

  await fs.writeFile(iconsIndexPath, iconsIndexFile)

  const iconsExport = `
/* Start generated icons */
export {
  IconNames,\n
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
