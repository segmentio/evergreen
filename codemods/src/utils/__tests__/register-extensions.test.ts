import { registerExtensions } from '../register-extensions'
import jscodeshift from 'jscodeshift'
import { CollectionExtensions } from '../../types/extended-collection'
import { ImportDeclarationCollectionExtensions } from '../register-import-declaration-collection-extensions'
import { ImportSpecifierCollectionExtensions } from '../register-import-specifier-collection-extensions'
import { JSXElementCollectionExtensions } from '../register-jsx-element-collection-extensions'

describe('registerExtensions', () => {
  const mockSource = ''

  it('should not throw after multiple calls', () => {
    expect(() => {
      for (let i = 0; i < 10; i++) {
        registerExtensions(jscodeshift)
      }
    }).not.toThrow()
  })

  it('should register CollectionExtensions', () => {
    const expected: Array<keyof CollectionExtensions> = [
      'concat',
      'difference',
      'findEvergreenImportDeclaration',
      'firstNode',
      'hasValues',
      'isEmpty',
      'toNodeArray'
    ]

    const result = registerExtensions(jscodeshift)(mockSource)

    expected.forEach(expectedMethod => {
      expect(result).toHaveProperty(expectedMethod)
    })
  })

  it('should register ImportDeclarationCollectionExtensions', () => {
    const expected: Array<keyof ImportDeclarationCollectionExtensions> = ['findImportSpecifiersByName']

    const result = registerExtensions(jscodeshift)(mockSource)

    expected.forEach(expectedMethod => {
      expect(result).toHaveProperty(expectedMethod)
    })
  })

  it('should register ImportSpecifierCollectionExtensions', () => {
    const expected: Array<keyof ImportSpecifierCollectionExtensions> = ['add', 'renameTo']

    const result = registerExtensions(jscodeshift)(mockSource)

    expected.forEach(expectedMethod => {
      expect(result).toHaveProperty(expectedMethod)
    })
  })

  it('should register JSXElementCollectionExtensions', () => {
    const expected: Array<keyof JSXElementCollectionExtensions> = [
      'addProp',
      'findPropByName',
      'findWithPropName',
      'findWithSpreadProps',
      'renameTo',
      'removeProp'
    ]

    const result = registerExtensions(jscodeshift)(mockSource)

    expected.forEach(expectedMethod => {
      expect(result).toHaveProperty(expectedMethod)
    })
  })
})
