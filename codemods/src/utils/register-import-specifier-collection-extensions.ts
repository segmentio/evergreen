import { JSCodeshift } from 'jscodeshift'
import {
  ImportSpecifierCollectionExtensions,
  ExtendedImportSpecifierCollection
} from '../types/extended-import-specifier-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { safelyRegisterMethods } from './safely-register-methods'
/* @ts-ignore */
import once from 'jscodeshift/src/utils/once'

const _registerImportSpecifierCollectionExtensions = (
  jscodeshift: ExtendedJSCodeshift | JSCodeshift
): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  safelyRegisterMethods<ImportSpecifierCollectionExtensions>(
    j,
    {
      add: function(name: string) {
        const importSpecifiers = (this as any) as ExtendedImportSpecifierCollection
        importSpecifiers.insertAfter(j.importSpecifier(j.identifier(name)))
        return importSpecifiers
      },
      remove: function(name: string) {
        const importSpecifiers = (this as any) as ExtendedImportSpecifierCollection
        return (importSpecifiers.filter(
          importSpecifier => importSpecifier.value.local?.name !== name
        ) as any) as ExtendedImportSpecifierCollection
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
