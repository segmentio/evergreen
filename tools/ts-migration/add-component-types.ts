import { Project } from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { compact, first, getSourceFileName } from './utils'

const addComponentTypes = async (project: Project) => {
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

    const propsName = `${name}Props`
    const typeOrInterface = first(compact([sourceFile.getInterface(propsName), sourceFile.getTypeAlias(propsName)]))

    if (typeOrInterface == null) {
      log.info(`  🤔 No props found for ${name}`)
      return
    }

    variableDeclaration.setType(`React.FC<${propsName}>`)

    typedVariableDeclaration.remove()
  })
}

export { addComponentTypes }
