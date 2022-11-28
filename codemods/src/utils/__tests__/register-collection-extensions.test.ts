import jscodeshift, { ASTPath } from 'jscodeshift'
import { registerCollectionExtensions } from '../register-collection-extensions'
import { stripIndent } from 'common-tags'

describe('registerCollectionExtensions', () => {
  describe('concat', () => {
    it('should combine nodes from both collections', () => {
      const j = registerCollectionExtensions(jscodeshift)
      const left = j('<Button />')
      const right = j('<Tab />')

      const result = left.concat(right)

      expect(result).toHaveLength(2)
    })

    it('should return collection of same length when input collection is empty', () => {
      const j = registerCollectionExtensions(jscodeshift)
      const left = j('<Button />')
      const right = j([])

      const result = left.concat(right)

      expect(result).toHaveLength(1)
    })
  })

  describe('difference', () => {})

  describe('findEvergreenImportDeclaration', () => {})

  describe('first', () => {
    it('should return collection with single node', () => {
      const source = stripIndent`
            <React.Fragment>
                <Button />
            </React.Fragment>
        `

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source).first()

      expect(result).toHaveLength(1)
    })

    it('should return collection with single node matching given predicate', () => {
      const source = stripIndent`
              <React.Fragment>
                  <FirstButton />
                  <SecondButton />
              </React.Fragment>
          `

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .first((path) => path.value.closingElement == null)

      expect(result).toHaveLength(1)
    })

    it('should return empty collection when no nodes match given predicate', () => {
      const source = stripIndent`
                <React.Fragment>
                    <Button>Hello world</Button>
                </React.Fragment>
            `

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source)
        .findJSXElements()
        .first((path) => path.value.closingElement == null)

      expect(result).toHaveLength(0)
    })
  })

  describe('firstNode', () => {})

  describe('flatMap', () => {})

  describe('hasValues', () => {
    it('should return false when collection has no nodes', () => {
      const source: ASTPath[] = []

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source).hasValues()

      expect(result).toBe(false)
    })

    it('should return true when collection has nodes', () => {
      const source = '<Button />'

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source).hasValues()

      expect(result).toBe(true)
    })
  })

  describe('intersect', () => {})

  describe('isEmpty', () => {
    it('should return true when collection has no nodes', () => {
      const source: ASTPath[] = []

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source).isEmpty()

      expect(result).toBe(true)
    })

    it('should return false when collection has nodes', () => {
      const source = '<Button />'

      const j = registerCollectionExtensions(jscodeshift)
      const result = j(source).isEmpty()

      expect(result).toBe(false)
    })
  })

  describe('toNodeArray', () => {})
})
