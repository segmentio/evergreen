import fs from 'fs'
import path from 'path'
import * as docgen from 'react-docgen'

const getComponentDocs = async (stem: string): Promise<any[]> => {
  const componentFiles = fs.readdirSync(stem).filter((name) => {
    const stats = fs.statSync(path.join(stem, name))
    return !stats.isDirectory()
  })

  const props = await Promise.all(
    componentFiles.map(async (name) => {
      const data = await fs.readFileSync(path.join(stem, name)).toString()
      try {
        const propsData = docgen.parse(data, null, null, {
          parserOptions: {
            plugins: [
              'asyncGenerators',
              'bigInt',
              'classPrivateMethods',
              'classPrivateProperties',
              'classProperties',
              'doExpressions',
              'dynamicImport',
              'exportDefaultFrom',
              'exportNamespaceFrom',
              'functionBind',
              'functionSent',
              'importMeta',
              'jsx',
              'logicalAssignment',
              'nullishCoalescingOperator',
              'numericSeparator',
              'objectRestSpread',
              'optionalCatchBinding',
              'optionalChaining',
              'throwExpressions',
              'topLevelAwait',
              'typescript',
            ],
          },
        })

        return propsData
      } catch (e) {
        console.error('There was an error parsing component documentation', e)
        return []
      }
    })
  )

  return props
}

export default getComponentDocs
