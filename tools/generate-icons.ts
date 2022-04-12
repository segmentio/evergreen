#!/usr/bin/env node
import path from 'path'
import { IconName, IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons'
import camelCase from 'camelcase'
/* @ts-ignore */
import fs from 'fs-extra'
import prettier from 'prettier'

const iconsPath = path.resolve(__dirname, '../src/icons/generated')
const iconsIndexPath = path.resolve(__dirname, '../src/icons/index.ts')
const indexPath = path.resolve(__dirname, '../src/index.ts')
// const typedefPath = path.resolve(__dirname, '../index.d.ts')
const iconNamesMapperPath = path.resolve(__dirname, '../src/icons/generated/IconNameMapper.ts')
const fileHeader = `// This is a generated file. DO NOT modify directly.\n\n`

async function main() {
  const prettierConfig = await prettier.resolveConfig(__dirname)
  await fs.emptyDir(iconsPath)
  const rawIconNames = Object.keys(IconSvgPaths16) as IconName[]
  const iconNames: string[] = []

  // =====================
  // create individual files for each icon as a React component
  // =====================

  const promises = rawIconNames.map(name => {
    const iconName = camelCase(name, { pascalCase: true }) + 'Icon'
    const svgPaths16 = IconSvgPaths16[name]
    const svgPaths20 = IconSvgPaths20[name]
    iconNames.push(iconName)

    let iconFile = `
import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  '${svgPaths16.join(`',\n  '`)}'
]
const svgPaths20 = [
  '${svgPaths20.join(`',\n  '`)}'
]

export const ${iconName}: IconComponent = memo(forwardRef(function ${iconName}(props, ref) {
  return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="${name}" {...props} />
}))
`
    const iconPath = path.join(iconsPath, `${iconName}.tsx`)
    iconFile = prettier.format(iconFile, {
      ...prettierConfig,
      filepath: iconPath
    })

    return fs.writeFile(iconPath, iconFile)
  })

  await Promise.all(promises)

  // =====================
  // create the IconNameMapper file
  // =====================

  const iconNamesMap: Record<string, string> = rawIconNames.reduce((agg: Record<string, string>, name: string) => {
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

  // =====================
  // create the icons/index.js file which exports individual icons
  // =====================

  let iconsIndexFile = iconNames
    .map(iconName => {
      return `export { ${iconName} } from './generated/${iconName}'`
    })
    .join('\n')

  iconsIndexFile = prettier.format(`${fileHeader}${iconsIndexFile}`, {
    ...prettierConfig,
    filepath: iconsIndexPath
  })

  await fs.writeFile(iconsIndexPath, iconsIndexFile)

  // =====================
  // update the main index.js file to include individual icon exports
  // =====================

  const iconsExport = `/* Start generated icons */
    export * from './icons'
    /* End generated icons */
  `

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
