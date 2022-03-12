import { SourceFile } from 'ts-morph'
import { log } from './log'

const addMissingImports = async (sourceFiles: SourceFile[]) => {
  sourceFiles.forEach(sourceFile => {
    log.info(`🕵️‍♀️ Fixing missing imports for ${sourceFile.getBaseName()}`)
    sourceFile.fixMissingImports()
  })
}

export { addMissingImports }
