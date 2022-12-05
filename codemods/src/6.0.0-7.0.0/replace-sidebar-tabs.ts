import { Transform } from 'jscodeshift'
import { getLogger } from '../utils/get-logger'
import { registerExtensions } from '../utils/register-extensions'
import { ExtendedJSXElementCollection } from '../utils/register-jsx-element-collection-extensions'

/**
 * Codemod to replace references to the <SidebarTab /> component removed in v7
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/6.0.0-7.0.0/replace-sidebar-tabs.js --parser=tsx --extensions=js,jsx,ts,tsx fileOrDirectory --dry --print
 * ```
 *
 * Converts:
 * <SidebarTab /> to <Tab direction="vertical" />
 */

const DIRECTION = 'direction'
const SIDEBAR_TAB = 'SidebarTab'
const TAB = 'Tab'
const VERTICAL = 'vertical'

const transformer: Transform = (file, api) => {
  const log = getLogger(file)
  const j = registerExtensions(api.jscodeshift)
  const root = j(file.source)

  const importDeclarations = root.findEvergreenImportDeclaration()
  if (importDeclarations.isEmpty()) {
    return file.source
  }

  const specifiers = importDeclarations.findImportSpecifiersByName(SIDEBAR_TAB)

  // If the file doesn't import `SidebarTab` from evergreen-ui, don't try to replace the JSX
  if (specifiers.isEmpty()) {
    return file.source
  }

  specifiers.renameTo(TAB)

  const sidebarTabs = root.findJSXElements(SIDEBAR_TAB)
  sidebarTabs.renameTo(TAB).forEach(sidebarTab => {
    const jsxElement = j<ExtendedJSXElementCollection>(sidebarTab)
    const existingDirectionProp = jsxElement.findPropByName(DIRECTION).firstNode()

    // If an existing `direction` prop exists, don't bother adding a duplicate one.
    const directionProp = existingDirectionProp ?? j.jsxAttribute(j.jsxIdentifier(DIRECTION), j.stringLiteral(VERTICAL))

    if (directionProp.value?.type === 'Literal' && directionProp.value.value !== VERTICAL) {
      const { value } = directionProp.value
      log(
        `Found <${SIDEBAR_TAB} /> with ${DIRECTION}='${value}'. This is likely a mistake, but will not be modified.`,
        directionProp
      )
      return
    }

    jsxElement.removeProp(directionProp).addProp(directionProp)
  })

  return root.toSource()
}

export default transformer
