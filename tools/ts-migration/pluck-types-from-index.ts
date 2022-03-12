import { InterfaceDeclaration, Project, SourceFile, TypeAliasDeclaration } from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { compact, insertTypeOrInterface, last } from './utils'

/**
 * Moves manually written type aliases and interfaces from index.d.ts to the corresponding component
 * if it can be matched up by name, for example:
 *
 * export interface UnorderedListOwnProps -> UnorderedList.tsx
 * export type UnorderedListProps = ... -> UnorderedList.tsx
 *
 * @returns List of SourceFiles that received types or interfaces
 */
const pluckTypesFromIndex = async (project: Project): Promise<SourceFile[]> => {
  const indexFile = project.getSourceFileOrThrow(INDEX_D_TS)

  const typesAndInterfaces = [...indexFile.getTypeAliases(), ...indexFile.getInterfaces()]

  const sourceFiles = typesAndInterfaces.map((typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration) => {
    const kind = typeOrInterface.getKindName()
    const name = typeOrInterface.getName()
    const line = typeOrInterface.getStartLineNumber()
    log.info(`Found ${kind} '${name}' at ${INDEX_D_TS}:${line}`)

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

    return sourceFile
  })

  return compact(sourceFiles)
}

const typeToSourceFileName = (typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration): string =>
  `${typeOrInterface
    .getName()
    .replace('OwnProps', '')
    .replace('Props', '')}.tsx`

export { pluckTypesFromIndex }
