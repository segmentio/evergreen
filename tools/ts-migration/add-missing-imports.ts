import { SourceFile } from 'ts-morph'

const addMissingImports = async (sourceFiles: SourceFile[]) => {
  sourceFiles.forEach(sourceFile => sourceFile.fixMissingImports())
}

export { addMissingImports }
