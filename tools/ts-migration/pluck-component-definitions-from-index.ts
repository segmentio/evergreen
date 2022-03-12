import { Project, VariableDeclaration } from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { getSourceFileName } from './utils'

const pluckComponentDefinitionsFromIndex = async (project: Project) => {
  const indexFile = project.getSourceFileOrThrow(INDEX_D_TS)

  const typedVariableDeclarations = indexFile.getVariableDeclarations()

  typedVariableDeclarations.forEach(typedVariableDeclaration => {
    const kind = typedVariableDeclaration.getKindName()
    const name = typedVariableDeclaration.getName()
    const line = typedVariableDeclaration.getStartLineNumber()
    log.info(`⌨️ Found ${kind} '${name}' at ${INDEX_D_TS}:${line}`)

    const sourceFile = project.getSourceFile(getSourceFileName(typedVariableDeclaration))
    if (sourceFile == null) {
      return
    }

    const variableDeclaration = sourceFile.getVariableDeclaration(name)
    if (variableDeclaration == null) {
      log.info(`  🤔 No matching SourceFile found for ${name}`)
      return
    }

    const type = getVariableType(typedVariableDeclaration)
    variableDeclaration.setType(type)

    typedVariableDeclaration.remove()
  })
}

const getVariableType = (variableDeclaration: VariableDeclaration): string => {
  const name = variableDeclaration.getName()

  return variableDeclaration
    .getFullText()
    .replace(name, '')
    .replace(':', '')
    .trim()
}

export { pluckComponentDefinitionsFromIndex }
