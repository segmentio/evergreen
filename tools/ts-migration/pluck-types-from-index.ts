import { Project, TypeAliasDeclaration } from 'ts-morph'
import { log } from './log'
import { last } from './utils'

const pluckTypesFromIndex = async (project: Project) => {
  const indexFile = project.getSourceFileOrThrow('index.d.ts')

  const types = indexFile.getTypeAliases()

  types.forEach((type: TypeAliasDeclaration) => {
    log.info(`Found TypeAliasDeclaration ${type.getName()} on line ${type.getStartLineNumber()}`)

    const sourceFile = project.getSourceFile(typeToSourceFileName(type))
    if (sourceFile == null) {
      return
    }

    log.info(`  Found matching SourceFile at ${sourceFile.getBaseName()}`)

    // Insert types after the last import declaration if any exist
    const lastImportIndex = last(sourceFile.getImportDeclarations())?.getChildIndex()
    sourceFile.insertTypeAlias(lastImportIndex != null ? lastImportIndex + 1 : 0, type.getStructure())
    type.remove()
  })
}

const typeToSourceFileName = (type: TypeAliasDeclaration): string =>
  `${type
    .getName()
    .replace('OwnProps', '')
    .replace('Props', '')}.tsx`

export { pluckTypesFromIndex }
