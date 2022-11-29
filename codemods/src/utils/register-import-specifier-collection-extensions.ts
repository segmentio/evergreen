import { JSCodeshift } from 'jscodeshift'
import {
  ImportSpecifierCollectionExtensions,
  ExtendedImportSpecifierCollection
} from '../types/extended-import-specifier-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { once } from './once'

const _registerImportSpecifierCollectionExtensions = (
  jscodeshift: ExtendedJSCodeshift | JSCodeshift
): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  j.registerMethods<ImportSpecifierCollectionExtensions>(
    {
      add: function(name: string) {
        const importSpecifiers = (this as any) as ExtendedImportSpecifierCollection
        importSpecifiers.insertAfter(j.importSpecifier(j.identifier(name)))
        return importSpecifiers
      },

      renameTo: function(name: string) {
        const importSpecifiers = (this as any) as ExtendedImportSpecifierCollection
        importSpecifiers.forEach(importSpecifier => {
          if (importSpecifier.value.local == null) {
            return
          }

          importSpecifier.value.local.name = name
        })

        return importSpecifiers
      }
    },
    j.ImportSpecifier
  )

  return j
}

const registerImportSpecifierCollectionExtensions = once(_registerImportSpecifierCollectionExtensions)

export { registerImportSpecifierCollectionExtensions }
