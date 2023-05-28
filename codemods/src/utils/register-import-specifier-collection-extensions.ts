import { ImportSpecifier, JSCodeshift } from 'jscodeshift'
import { ExtendedCollection } from '../types/extended-collection'
import { ExtendedJSCodeshift } from '../types/extended-jscodeshift'
import { once } from './once'

/**
 * Represents an `ImportSpecifier` node collection that has access to type-specific extension methods
 * via `utils/register-extensions.ts`
 */
export interface ExtendedImportSpecifierCollection
  extends ImportSpecifierCollectionExtensions,
    Omit<ExtendedCollection<ImportSpecifier>, 'renameTo'> {}

/**
 * Extension methods that are unique to `ImportSpecifier` collections
 */
export interface ImportSpecifierCollectionExtensions {
  /**
   * Adds a new `ImportSpecifier` with the provided name
   */
  add: (name: string) => ExtendedImportSpecifierCollection

  /**
   * Renames the `ImportSpecifier` to the provided value
   */
  renameTo: (name: string) => ExtendedImportSpecifierCollection
}

const _registerImportSpecifierCollectionExtensions = (
  jscodeshift: ExtendedJSCodeshift | JSCodeshift
): ExtendedJSCodeshift => {
  const j = jscodeshift as ExtendedJSCodeshift

  j.registerMethods<ImportSpecifierCollectionExtensions>(
    {
      add: function(name: string) {
        const importSpecifiers = (this as any) as ExtendedImportSpecifierCollection
        if (importSpecifiers.some(importSpecifier => importSpecifier.name === name)) {
          return importSpecifiers
        }

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
