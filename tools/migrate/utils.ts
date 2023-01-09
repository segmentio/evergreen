import { ExportDeclaration, InterfaceDeclaration, Project, SourceFile, TypeAliasDeclaration } from 'ts-morph'
import { INDEX_D_TS } from './constants'

const arrify = <T>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value])

const findNearestIndexFile = (sourceFile: SourceFile): SourceFile | undefined =>
  sourceFile.getReferencingSourceFiles().find(sourceFile => sourceFile.getBaseNameWithoutExtension() === 'index')

const first = <T>(values?: T[]): T | undefined => values?.[0]

const getIndexFileOrThrow = (project: Project) => project.getSourceFileOrThrow(INDEX_D_TS)

const getSourceFileByComponentName = (project: Project, componentName: string): SourceFile | undefined =>
  project.getSourceFile(sourceFile => sourceFile.getBaseNameWithoutExtension() === componentName)

const getTypesOrInterfaces = (sourceFile: SourceFile): Array<InterfaceDeclaration | TypeAliasDeclaration> => [
  ...sourceFile.getTypeAliases(),
  ...sourceFile.getInterfaces()
]

const getTypesOrInterfacesByComponentName = (
  sourceFile: SourceFile,
  componentName: string
): Array<InterfaceDeclaration | TypeAliasDeclaration> =>
  getTypesOrInterfaces(sourceFile).filter(typeOrInterface => typeOrInterface.getName().includes(componentName))

/**
 * Returns an ExportDeclaration that contains all of the type/variable names, if it exists
 */
const getExportDeclaration = (
  names: string[] | string,
  exportDeclarations: ExportDeclaration[] | ExportDeclaration
): ExportDeclaration | undefined => {
  const arrifiedNames = arrify(names)
  const arrifiedExportDeclarations = arrify(exportDeclarations)

  return arrifiedExportDeclarations.find(exportDeclaration => {
    const exportSpecifiers = exportDeclaration
      .getNamedExports()
      .map(exportSpecifier => exportSpecifier.getAliasNode()?.getText() ?? exportSpecifier.getName())

    if (arrifiedNames.every(name => exportSpecifiers.includes(name))) {
      return exportDeclaration
    }

    return undefined
  })
}

const insertTypeOrInterface = (
  sourceFile: SourceFile,
  index: number,
  typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration
) =>
  typeOrInterface instanceof TypeAliasDeclaration
    ? sourceFile.insertTypeAlias(index, typeOrInterface.getStructure())
    : sourceFile.insertInterface(index, typeOrInterface.getStructure())

const isEmpty = <T>(value: T[] | string | null | undefined): value is undefined | null =>
  value == null || value.length === 0

const last = <T>(values?: T[]): T | undefined => {
  if (isEmpty(values)) {
    return undefined
  }

  return [...values].reverse()[0]
}

export {
  findNearestIndexFile,
  first,
  getExportDeclaration,
  getIndexFileOrThrow,
  getSourceFileByComponentName,
  getTypesOrInterfacesByComponentName,
  getTypesOrInterfaces,
  insertTypeOrInterface,
  isEmpty,
  last
}
