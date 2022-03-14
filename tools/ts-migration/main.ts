import { stripTSIgnorePlugin } from 'ts-migrate-plugins'
import { migrate, MigrateConfig } from 'ts-migrate-server'
import { Project } from 'ts-morph'
import { addComponentTypes } from './add-component-types'
import { addMissingImports } from './add-missing-imports'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { pluckTypesFromIndex } from './pluck-types-from-index'
import { removePropTypes } from './remove-prop-types'

const main = async () => {
  const project = new Project({ tsConfigFilePath: './tsconfig.json' })
  const sourceFiles = project.getSourceFiles()
  log.info(`🗂 Loaded Project with ${sourceFiles.length} SourceFiles.`)

  project.addSourceFileAtPath(`./${INDEX_D_TS}`)
  log.info(`📄 Added ${INDEX_D_TS} to Project`)

  const filesWithTypes = await pluckTypesFromIndex(project)
  await addComponentTypes(project)
  await addMissingImports(filesWithTypes)
  await removePropTypes(project)

  log.info('😵‍💫 Saving Project...')
  await project.save()
  log.info('💾 Saved Project!')

  log.info('🧼 Stripping ts-ignore and ts-expect-error comments')
  const config = new MigrateConfig().addPlugin(stripTSIgnorePlugin, {})
  await migrate({ rootDir: '.', config })
}

main()
