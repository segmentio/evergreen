import { Project, TypeAliasDeclaration } from 'ts-morph'
import { log } from './log'

const pluckTypesFromIndex = async (project: Project) => {
  const indexFile = project.getSourceFileOrThrow('index.d.ts')

  const types = indexFile.getTypeAliases()

  types.forEach((type: TypeAliasDeclaration) => {
    log.info(`Found TypeAliasDeclaration ${type.getName()} on line ${type.getStartLineNumber()}`)

    const sourceFile = project.getSourceFile(typeToSourceFileName(type))

    if (sourceFile != null) {
      log.info(`  Found matching SourceFile at ${sourceFile.getBaseName()}`)
    }
  })
}

const typeToSourceFileName = (type: TypeAliasDeclaration): string =>
  `${type
    .getName()
    .replace('OwnProps', '')
    .replace('Props', '')}.tsx`

export { pluckTypesFromIndex }
