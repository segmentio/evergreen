import { InterfaceDeclaration, Project, TypeAliasDeclaration } from 'ts-morph'
import { log } from './log'
import { insertTypeOrInterface, last } from './utils'

const pluckTypesFromIndex = async (project: Project) => {
  const indexFile = project.getSourceFileOrThrow('index.d.ts')

  const typesAndInterfaces = [...indexFile.getTypeAliases(), ...indexFile.getInterfaces()]

  typesAndInterfaces.forEach((typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration) => {
    log.info(
      `Found ${typeOrInterface.getKindName()} ${typeOrInterface.getName()} on line ${typeOrInterface.getStartLineNumber()}`
    )

    const sourceFile = project.getSourceFile(typeToSourceFileName(typeOrInterface))
    if (sourceFile == null) {
      return
    }

    log.info(`  Found matching SourceFile at ${sourceFile.getBaseName()}`)

    // Insert types after the last import declaration if any exist
    const lastImportIndex = last(sourceFile.getImportDeclarations())?.getChildIndex()
    const insertionIndex = lastImportIndex != null ? lastImportIndex + 1 : 0

    insertTypeOrInterface(sourceFile, insertionIndex, typeOrInterface)
    typeOrInterface.remove()
  })
}

const typeToSourceFileName = (typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration): string =>
  `${typeOrInterface
    .getName()
    .replace('OwnProps', '')
    .replace('Props', '')}.tsx`

export { pluckTypesFromIndex }
