import { Project } from 'ts-morph'
import { log } from './log'
import { pluckTypesFromIndex } from './pluck-types-from-index'

const main = async () => {
  const project = new Project({ tsConfigFilePath: './tsconfig.json' })
  const sourceFiles = project.getSourceFiles()
  log.info(`Loaded Project with ${sourceFiles.length} SourceFiles.`)

  const indexFile = project.addSourceFileAtPath('./index.d.ts')
  log.info(`Added ${indexFile.getBaseName()} to Project`)

  pluckTypesFromIndex(project)
}

main()
