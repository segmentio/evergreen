import { InterfaceDeclaration, Project, TypeAliasDeclaration } from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { getIndexFileOrThrow, getTypesOrInterfacesByComponentName } from './utils'

/**
 * Remove component types, interfaces and variable declaration from index.d.ts
 */
const removeTypesFromIndex = async (project: Project, componentName: string): Promise<void> => {
  const indexFile = getIndexFileOrThrow(project)

  const variableDeclaration = indexFile.getVariableDeclaration(componentName)
  if (variableDeclaration != null) {
    const kind = variableDeclaration.getKindName()
    const line = variableDeclaration.getStartLineNumber()

    log.info(removeTypesFromIndex, `Removing ${kind} '${componentName}' at ${INDEX_D_TS}:${line}`)
    variableDeclaration?.remove()
  }

  const typesAndInterfaces = getTypesOrInterfacesByComponentName(indexFile, componentName)

  typesAndInterfaces.forEach((typeOrInterface: TypeAliasDeclaration | InterfaceDeclaration) => {
    const kind = typeOrInterface.getKindName()
    const name = typeOrInterface.getName()
    const line = typeOrInterface.getStartLineNumber()

    log.info(removeTypesFromIndex, `Removing ${kind} '${name}' at ${INDEX_D_TS}:${line}`)
    typeOrInterface.remove()
  })
}

export { removeTypesFromIndex }
