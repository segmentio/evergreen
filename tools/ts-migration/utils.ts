import { InterfaceDeclaration, SourceFile, TypeAliasDeclaration } from 'ts-morph'

const first = <T>(values?: T[]): T | undefined => values?.[0]

const insertTypeOrInterface = (
  sourceFile: SourceFile,
  index: number,
  typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration
) =>
  typeOrInterface instanceof TypeAliasDeclaration
    ? sourceFile.insertTypeAlias(index, typeOrInterface.getStructure())
    : sourceFile.insertInterface(index, typeOrInterface.getStructure())

const last = <T>(values?: T[]): T | undefined => values?.reverse()[0]

export { first, insertTypeOrInterface, last }
