import { FileInfo, ImportSpecifier, JSXAttribute, JSXClosingElement, JSXElement, JSXOpeningElement } from 'jscodeshift'
import path from 'path'

/**
 * Returns a logger function that is automatically prefixed with file path info
 */
const getLogger =
  (file: FileInfo) =>
  (message: string, node?: JSXAttribute | JSXElement | JSXOpeningElement | JSXClosingElement | ImportSpecifier) => {
    let prefix = `${path.basename(file.path)}`
    if (node != null) {
      prefix = `${prefix}:L${node.loc?.start.line}`
    }

    console.log(`${prefix} ${message}`)
  }

export { getLogger }
