#!/usr/bin/env node
'use strict'
const path = require('path')
const fs = require('fs-extra')
const { IconSvgPaths16, IconSvgPaths20 } = require('@blueprintjs/icons')
const camelCase = require('camelcase')
const prettier = require('prettier')

const iconsPath = path.resolve(__dirname, '../src/icons/generated')
const iconsIndexPath = path.resolve(__dirname, '../src/icons/index.js')
const indexPath = path.resolve(__dirname, '../src/index.js')
const typedefPath = path.resolve(__dirname, '../index.d.ts')
const iconNamesMapperPath = path.resolve(
  __dirname,
  '../src/icons/generated/IconNameMapper.js'
)
const fileHeader = `// This is a generated file. DO NOT modify directly.\n\n`

async function main() {
  const prettierConfig = await prettier.resolveConfig(__dirname)
  await fs.emptyDir(iconsPath)
  const rawIconNames = Object.keys(IconSvgPaths16)
  const iconNames = []

  // =====================
  // create individual files for each icon as a React component
  // =====================

  const promises = Object.keys(IconSvgPaths16).map(name => {
    const iconName = camelCase(name, { pascalCase: true }) + 'Icon'
    const svgPaths16 = IconSvgPaths16[name]
    const svgPaths20 = IconSvgPaths20[name]
    iconNames.push(iconName)

    let iconFile = `
import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  '${svgPaths16.join(`',\n  '`)}'
]
const svgPaths20 = [
  '${svgPaths20.join(`',\n  '`)}'
]

export const ${iconName} = memo(forwardRef(function ${iconName}(props, ref) {
  return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="${name}" {...props} />
}))
`
    const iconPath = path.join(iconsPath, `${iconName}.js`)
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

  // =====================
  // update the typedefs to include icons
  // =====================

  const iconTypeDefs = iconNames
    .map(
      componentName => `export declare const ${componentName}: IconComponent`
    )
    .join('\n')

  const iconsTypeDefs = `/* Start generated icons */
type IconComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<IconProps> & React.RefAttributes<SVGElement>>
${iconTypeDefs}
/* End generated icons */`

  let typedefs = await fs.readFile(typedefPath, 'utf8')
  typedefs = typedefs.replace(
    /\/\* Start generated icons \*\/[\s\S]*?\/\* End generated icons \*\//i,
    iconsTypeDefs
  )

  await fs.writeFile(typedefPath, typedefs)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
