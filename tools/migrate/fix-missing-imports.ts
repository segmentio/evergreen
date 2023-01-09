import { SourceFile } from 'ts-morph'
import { log } from './log'

const fixMissingImports = async (sourceFile: SourceFile) => {
  log.info(fixMissingImports, `Fixing missing imports for ${sourceFile.getBaseName()}`)
  sourceFile.fixMissingImports()
}

export { fixMissingImports }
