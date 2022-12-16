import { Transform } from 'jscodeshift'
import { registerExtensions } from '../utils/register-extensions'
import { ExtendedJSXElementCollection } from '../utils/register-jsx-element-collection-extensions'

/**
 * Codemod to replace references to the <Nudge /> component removed in v7
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/6.0.0-7.0.0/replace-nudge.js --parser=tsx --extensions=js,jsx,ts,tsx fileOrDirectory --dry --print
 * ```
 *
 * Converts:
 * <Nudge /> to <Pulsar />
 */

const NUDGE = 'Nudge'
const PANE = 'Pane'
const PULSAR = 'Pulsar'
const TOOLTIP = 'Tooltip'
const TOOLTIP_CONTENT_PROP = 'tooltipContent'

const transformer: Transform = (file, api) => {
  const j = registerExtensions(api.jscodeshift)

  const root = j(file.source)

  const importDeclarations = root.findEvergreenImportDeclaration()

  if (importDeclarations.isEmpty()) {
    return file.source
  }

  const importSpecifiers = importDeclarations.findImportSpecifiersByName(NUDGE)

  if (importSpecifiers.isEmpty()) {
    return file.source
  }

  const nudges = root.findJSXElements(NUDGE)

  if (nudges.isEmpty()) {
    return file.source
  }

  nudges
    // The isShown prop isn't present/required anymore since we aren't bundling a Popover acting as a Tooltip
    .removeProp('isShown')
    .renameTo(PULSAR)
    .wrap(PANE, [
      { name: 'position', value: 'relative' },
      { name: 'display', value: 'inline-block' }
    ])

  const tooltipNudges = nudges.findWithPropName(TOOLTIP_CONTENT_PROP)
  if (tooltipNudges.hasValues()) {
    importSpecifiers.add(TOOLTIP)

    tooltipNudges.forEach(_tooltipNudge => {
      const tooltipNudge = j<ExtendedJSXElementCollection>(_tooltipNudge)
      const value = tooltipNudge.findPropByName(TOOLTIP_CONTENT_PROP).firstNode()?.value
      tooltipNudge.removeProp(TOOLTIP_CONTENT_PROP).wrap(TOOLTIP, [{ name: 'content', value }])
    })
  }

  importSpecifiers.add(PULSAR).add(PANE)

  importDeclarations.findImportSpecifiersByName(NUDGE).remove()

  return root.toSource()
}

export default transformer
