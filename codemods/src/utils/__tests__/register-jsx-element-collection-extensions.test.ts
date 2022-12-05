import { registerJSXElementCollectionExtensions } from '../register-jsx-element-collection-extensions'
import jscodeshift from 'jscodeshift'
import { ExtendedJSCodeshift } from '../../types/extended-jscodeshift'
import { stripIndent } from 'common-tags'

describe('registerJSXElementCollectionExtensions', () => {
  it('should not throw after multiple calls', () => {
    expect(() => {
      for (let i = 0; i < 10; i++) {
        registerJSXElementCollectionExtensions((jscodeshift as any) as ExtendedJSCodeshift)
      }
    }).not.toThrow()
  })

  describe('addProp', () => {
    it('should add the prop to the node', () => {
      const source = stripIndent`<Button>Hello world</Button>`
      const expected = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .addProp(j.jsxAttribute(j.jsxIdentifier('onClick'), j.jsxExpressionContainer(j.identifier('noop'))))
        .toSource()

      expect(result).toMatch(expected)
    })

    it('should add the prop to all nodes in collection', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
            </React.Fragment>
        `
      const expected = stripIndent`
            <React.Fragment>
                <Button onClick={noop}>Cancel</Button>
                <Button onClick={noop}>Confirm</Button>
            </React.Fragment>
        `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements('Button')
        .addProp(j.jsxAttribute(j.jsxIdentifier('onClick'), j.jsxExpressionContainer(j.identifier('noop'))))
        .toSource()

      expect(result).toMatch(expected)
    })

    it('should not add duplicate named prop', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`
      const expected = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .addProp(j.jsxAttribute(j.jsxIdentifier('onClick'), j.jsxExpressionContainer(j.identifier('noop'))))
        .toSource()

      expect(result).toMatch(expected)
    })

    it.skip('should not add duplicate spread prop', () => {
      const source = stripIndent`<Button {...props}}>Hello world</Button>`
      const expected = stripIndent`<Button {...props}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .addProp(j.jsxSpreadAttribute(j.jsxExpressionContainer(j.jsxEmptyExpression())))
        .toSource()

      expect(result).toMatch(expected)
    })
  })

  describe('findPropByName', () => {
    it('should return empty collection when no matching props found', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findPropByName('doesNotExist')

      expect(result).toHaveLength(0)
    })

    it('should return prop when found', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findPropByName('onClick')

      expect(result).toHaveLength(1)
    })

    it('should return all props when found', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button onClick={noop}>Cancel</Button>
                <Button onClick={noop}>Confirm</Button>
            </React.Fragment>
        `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findPropByName('onClick')

      expect(result).toHaveLength(2)
    })
  })

  describe('findWithPropName', () => {
    it('should return empty collection when no matching prop found', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithPropName('doesNotExist')

      expect(result).toHaveLength(0)
    })

    it('should return node when prop found', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithPropName('onClick')

      expect(result).toHaveLength(1)
    })

    it('should return all nodes with matching props', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button onClick={noop}>Cancel</Button>
                <Button onClick={noop}>Confirm</Button>
            </React.Fragment>
        `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithPropName('onClick')

      expect(result).toHaveLength(2)
    })
  })

  describe('findWithSpreadProps', () => {
    it('should return empty collection when no spread prop found', () => {
      const source = stripIndent`<Button>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithSpreadProps()

      expect(result).toHaveLength(0)
    })

    it('should return node when spread prop found', () => {
      const source = stripIndent`<Button {...props}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithSpreadProps()

      expect(result).toHaveLength(1)
    })

    it('should return all nodes with matching props', () => {
      const source = stripIndent`
              <React.Fragment>
                  <Button {...props}>Cancel</Button>
                  <Button {...props}>Confirm</Button>
              </React.Fragment>
          `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .findWithSpreadProps()

      expect(result).toHaveLength(2)
    })
  })

  describe('removeProp', () => {
    it('should not modify node without prop', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .removeProp(j.jsxAttribute(j.jsxIdentifier('doesNotExist')))
        .toSource()

      expect(result).toEqual(source)
    })

    it('should remove prop from node', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`
      const expected = stripIndent`<Button>Hello world</Button>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .removeProp(j.jsxAttribute(j.jsxIdentifier('onClick')))
        .toSource()

      expect(result).toEqual(expected)
    })

    it('should remove prop from all nodes in collection', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button onClick={noop}>Cancel</Button>
                <Button onClick={noop}>Confirm</Button>
            </React.Fragment>
        `
      const expected = stripIndent`
            <React.Fragment>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
            </React.Fragment>
        `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .removeProp(j.jsxAttribute(j.jsxIdentifier('onClick')))
        .toSource()

      expect(result).toEqual(expected)
    })
  })

  describe('renameTo', () => {
    it('should rename node', () => {
      const source = stripIndent`<Button onClick={noop}>Hello world</Button>`
      const expected = stripIndent`<CoolButton onClick={noop}>Hello world</CoolButton>`

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .renameTo('CoolButton')
        .toSource()

      expect(result).toEqual(expected)
    })

    it('should rename all nodes in collection', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button onClick={noop}>Cancel</Button>
                <Button onClick={noop}>Confirm</Button>
            </React.Fragment>
        `
      const expected = stripIndent`
            <React.Fragment>
                <CoolButton onClick={noop}>Cancel</CoolButton>
                <CoolButton onClick={noop}>Confirm</CoolButton>
            </React.Fragment>
        `

      const j = registerJSXElementCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements('Button')
        .renameTo('CoolButton')
        .toSource()

      expect(result).toEqual(expected)
    })
  })
})
