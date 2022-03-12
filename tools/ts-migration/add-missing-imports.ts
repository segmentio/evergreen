import { SourceFile } from 'ts-morph'
import { log } from './log'

const addMissingImports = async (sourceFiles: SourceFile[]) => {
  const uniqueSourceFiles = [...new Set(sourceFiles)]
  uniqueSourceFiles.forEach((sourceFile: SourceFile) => {
    log.info(`🕵️‍♀️ Fixing missing imports for ${sourceFile.getBaseName()}`)
    sourceFile.fixMissingImports()
  })
}

export { addMissingImports }
