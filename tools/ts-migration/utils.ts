import { InterfaceDeclaration, SourceFile, TypeAliasDeclaration } from 'ts-morph'

const compact = <T>(values?: Array<T | null | undefined>): T[] => {
  if (values == null) {
    return []
  }

  return values.filter((maybeValue: T | null | undefined) => maybeValue != null) as T[]
}

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

export { compact, first, insertTypeOrInterface, last }
