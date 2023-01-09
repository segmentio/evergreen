import { stripTSIgnorePlugin, tsIgnorePlugin, eslintFixPlugin } from 'ts-migrate-plugins'
import { migrate, MigrateConfig } from 'ts-migrate-server'
import { Project, QuoteKind } from 'ts-morph'
import { INDEX_D_TS } from './constants'
import { log } from './log'
import { moveTypesFromIndex } from './move-types-from-index'
import { renameFileExtension } from './rename-file-extension'
import { program } from 'commander'
import { getSourceFileByComponentName, isEmpty } from './utils'
import { removeTypesFromIndex } from './remove-types-from-index'
import { removePropTypes } from './remove-prop-types'
import { fixMissingImports } from './fix-missing-imports'

interface Options {
  /**
   * Component name to migrate or update, such as Pane
   */
  component: string

  /**
   * Automatically attempts to fix missing imports in a file
   */
  fixMissingImports?: boolean

  /**
   * Move types or interfaces from index.d.ts into the corresponding TS file
   */
  moveTypes?: boolean

  /**
   * Rename the file from .js to .ts/.tsx
   */
  renameFile?: boolean

  /**
   * Removes propTypes from the component
   */
  removePropTypes?: boolean

  /**
   * Removes the accompanying types/interfaces from index.d.ts
   */
  removeTypes?: boolean
}

program
  .name('migrate')
  .description('Run various scripts to migrate a component/module to TypeScript')
  .option('-c, --component <componentName>', 'Component name to migrate or update, such as Pane')
  .option('--fix-missing-imports', 'Automatically attempts to fix missing imports in a file')
  .option('--move-types', 'Move types or interfaces from index.d.ts into the corresponding TS file')
  .option(
    '--rename-file',
    'Rename the file extension from .js to .ts/.tsx (defaults to true when --move-types or --fix-missing-imports is set)'
  )
  .option('--remove-prop-types', 'Removes propTypes from the component')
  .option('--remove-types', 'Removes the accompanying types/interfaces from index.d.ts')

const migrationConfig = new MigrateConfig()
  .addPlugin(stripTSIgnorePlugin, {})
  .addPlugin(tsIgnorePlugin, {})
  .addPlugin(eslintFixPlugin, {})

const main = async () => {
  program.parse()
  const {
    component: componentName,
    fixMissingImports: shouldFixMissingImports = false,
    moveTypes: shouldMoveTypes = false,
    renameFile: shouldRenameFile = false,
    removePropTypes: shouldRemovePropTypes = false,
    removeTypes: shouldRemoveTypes = false
  } = program.opts<Options>()

  if (isEmpty(componentName)) {
    program.help()
  }

  const project = new Project({
    tsConfigFilePath: './tsconfig.json',
    manipulationSettings: {
      quoteKind: QuoteKind.Single,
      useTrailingCommas: false
    }
  })
  const sourceFiles = project.getSourceFiles()
  log.info(main, `Loaded Project with ${sourceFiles.length} SourceFiles.`)

  project.addSourceFileAtPath(`./${INDEX_D_TS}`)
  log.info(main, `Added ${INDEX_D_TS} to Project`)

  const file = getSourceFileByComponentName(project, componentName)
  if (file == null) {
    log.info(main, `Unable to find file for ${componentName}`)
    return
  }

  // We should always be working in a TS file if we're moving types or fixing imports
  if (shouldRenameFile || shouldMoveTypes || shouldFixMissingImports) {
    await renameFileExtension(file)
  }

  if (shouldMoveTypes) {
    await moveTypesFromIndex(project, componentName)
  }

  if (shouldRemoveTypes) {
    await removeTypesFromIndex(project, componentName)
  }

  if (shouldRemovePropTypes) {
    await removePropTypes(file)
  }

  if (shouldFixMissingImports) {
    await fixMissingImports(file)
  }

  log.info(main, 'Saving Project...')
  await project.save()
  log.info(main, 'Saved Project!')

  log.info(main, 'Running ts-migrate on file')
  await migrate({
    rootDir: '.',
    config: migrationConfig,
    sources: file.getFilePath()
  })

  log.info(main, 'Exiting')
}

main()
