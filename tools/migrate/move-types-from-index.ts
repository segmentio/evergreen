import {
  ExportDeclaration,
  ExportDeclarationStructure,
  InterfaceDeclaration,
  OptionalKind,
  Project,
  SourceFile,
  TypeAliasDeclaration
} from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { renameFileExtension } from './rename-file-extension'
import {
  findNearestIndexFile,
  getExportDeclaration,
  getIndexFileOrThrow,
  getSourceFileByComponentName,
  getTypesOrInterfacesByComponentName,
  insertTypeOrInterface,
  isEmpty,
  last
} from './utils'

/**
 * Moves manually written type aliases and interfaces from index.d.ts to the corresponding component
 * if it can be matched up by name, for example:
 *
 * export interface UnorderedListOwnProps -> UnorderedList.tsx
 * export type UnorderedListProps = ... -> UnorderedList.tsx
 *
 * @param project Project that contains JS/TS source files
 * @param componentName Name of the component/module to find types for to maintain existing types
 * for reference or declaration merging
 */
const moveTypesFromIndex = async (project: Project, componentName: string): Promise<void> => {
  const indexFile = getIndexFileOrThrow(project)
  const sourceFile = getSourceFileByComponentName(project, componentName)

  if (sourceFile == null) {
    return
  }

  let typesAndInterfaces = getTypesOrInterfacesByComponentName(indexFile, componentName)

  // If the initial array is empty, it means we've probably already moved the types/interfaces
  // to the source file. Let's pull them out so we can make sure they are exported in the appropriate index files
  if (isEmpty(typesAndInterfaces)) {
    typesAndInterfaces = getTypesOrInterfacesByComponentName(sourceFile, componentName)
  }

  if (isEmpty(typesAndInterfaces)) {
    return
  }

  typesAndInterfaces.forEach((typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration) => {
    const kind = typeOrInterface.getKindName()
    const name = typeOrInterface.getName()
    const line = typeOrInterface.getStartLineNumber()

    log.info(moveTypesFromIndex, `Found ${kind} '${name}' at ${INDEX_D_TS}:${line}`)

    // Insert types after the last import declaration if any exist
    const lastImportIndex = last(sourceFile.getImportDeclarations())?.getChildIndex()
    const insertionIndex = lastImportIndex != null ? lastImportIndex + 1 : 0

    // Skip adding the interface if it's already present in the file to prevent dupes/overwrites
    if (isEmpty(getTypesOrInterfacesByComponentName(sourceFile, name))) {
      log.info(moveTypesFromIndex, `Inserting ${kind} '${name}'`)
      insertTypeOrInterface(sourceFile, insertionIndex, typeOrInterface)
    }
  })

  const componentModuleSpecifier = `/src/${componentName}`
  // Export from the nearest index file (and make sure it's a ts file)
  const nearestIndexFile = findNearestIndexFile(sourceFile)
  if (nearestIndexFile != null) {
    insertTypeExportsIntoIndexFile(componentName, nearestIndexFile, typesAndInterfaces, `.${componentModuleSpecifier}`)
  }

  // Export from the root index file (which should be a ts file already)
  const rootIndexFile = project.getSourceFile('./src/index.ts')
  if (rootIndexFile != null && nearestIndexFile != null) {
    const moduleSpecifier = rootIndexFile
      .getRelativePathAsModuleSpecifierTo(sourceFile)
      // Strip out individual component specifier to just get the 'package' specifier, i.e. ./layers instead of ./layers/src/Pane
      .replace(componentModuleSpecifier, '')
    insertTypeExportsIntoIndexFile(componentName, rootIndexFile, typesAndInterfaces, moduleSpecifier)
  }

  // Ensure generated types are re-exported from manually written index file
  insertExportInRootIndexDts(componentName, indexFile, typesAndInterfaces)
}

const getGeneratedTypesExportDeclaration = (
  exportDeclarations: ExportDeclaration[],
  isTypeOnly: boolean
): ExportDeclaration | undefined =>
  exportDeclarations.find(
    exportDeclaration =>
      exportDeclaration.getModuleSpecifierValue() === './types' && exportDeclaration.isTypeOnly() === isTypeOnly
  )

const insertTypeExportsIntoIndexFile = (
  componentName: string,
  indexFile: SourceFile,
  typesAndInterfaces: Array<TypeAliasDeclaration | InterfaceDeclaration>,
  moduleSpecifier: string
) => {
  renameFileExtension(indexFile)

  const exportDeclarations = indexFile.getExportDeclarations()
  const typeNames = typesAndInterfaces.map(typeOrInterface => typeOrInterface.getName())

  const typeExportDeclaration = getExportDeclaration(typeNames, exportDeclarations)
  if (typeExportDeclaration != null) {
    return
  }

  log.info(insertTypeExportsIntoIndexFile, `Adding type exports for ${typeNames} in ${indexFile.getFilePath()}`)

  const componentExportIndex = getExportDeclaration(componentName, exportDeclarations)?.getChildIndex()
  const exportDeclaration: OptionalKind<ExportDeclarationStructure> = {
    isTypeOnly: true,
    namedExports: typeNames.map(typeName => ({ name: typeName })),
    moduleSpecifier
  }

  // Insert right after component export, if found
  if (componentExportIndex != null) {
    indexFile.insertExportDeclaration(componentExportIndex + 1, exportDeclaration)
    return
  }

  indexFile.addExportDeclaration(exportDeclaration)
}

const insertExportInRootIndexDts = (
  componentName: string,
  indexFile: SourceFile,
  typesAndInterfaces: Array<TypeAliasDeclaration | InterfaceDeclaration>
) => {
  const exportDeclarations = indexFile.getExportDeclarations()
  const typeNames = typesAndInterfaces.map(typeOrInterface => typeOrInterface.getName())

  const generatedTypeOnlyExport = getGeneratedTypesExportDeclaration(exportDeclarations, true)
  const generatedTypeValueExport = getGeneratedTypesExportDeclaration(exportDeclarations, false)

  if (generatedTypeOnlyExport == null || generatedTypeValueExport == null) {
    log.info(
      insertExportInRootIndexDts,
      `Generated export declarations in manually written ${INDEX_D_TS} were unexpectedly null`
    )
    return
  }

  // Determine if we already have export specifiers for these types, and if not, insert them
  const hasTypeExport = getExportDeclaration(typeNames, generatedTypeOnlyExport) != null
  if (!hasTypeExport) {
    log.info(insertExportInRootIndexDts, `Adding type exports for ${typeNames} in manually written ${INDEX_D_TS}`)
    generatedTypeOnlyExport.addNamedExports(typeNames)
  }

  // Determine if we already have an export specifier for the component, and if not, insert it
  const hasComponentExport = getExportDeclaration(componentName, generatedTypeValueExport) != null
  if (!hasComponentExport) {
    log.info(insertExportInRootIndexDts, `Adding export for ${componentName} in manually written ${INDEX_D_TS}`)
    generatedTypeValueExport.addNamedExport(componentName)
  }
}

export { moveTypesFromIndex }
