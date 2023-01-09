import { SourceFile } from 'ts-morph'
import { log } from './log'

const renameFileExtension = async (file: SourceFile): Promise<SourceFile> => {
  const baseName = file.getBaseNameWithoutExtension()
  log.info(renameFileExtension, `Ensuring ${file.getBaseName()} is a ts/tsx file`)

  // Determine if it should be a tsx file by the filename (is it a component or a utility module?)
  const isTsx = /[A-Z]/.test(baseName[0])

  return file.move(`${baseName}.${isTsx ? 'tsx' : 'ts'}`)
}

export { renameFileExtension }
