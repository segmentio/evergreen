import { Transform } from 'jscodeshift'
import { getLogger } from '../utils/get-logger'
import { registerExtensions } from '../utils/register-extensions'

const NUDGE = 'Nudge'
const PULSAR = 'Pulsar'

const transformer: Transform = (file, api) => {
  const log = getLogger(file)
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

  const ignoredNudges = nudges
    .findWithPropName('isShown')
    .concat(nudges.findWithPropName('tooltipContent'))
    .concat(nudges.findWithSpreadProps())
  const transformableNudges = nudges.difference(ignoredNudges)

  if (ignoredNudges.hasValues()) {
    ignoredNudges.forEach(nudge =>
      log(
        `Found <${NUDGE}> with either deprecated props or spread props that can't be statically analyzed and can't safely be swapped with <${PULSAR}>, you will need to port this over manually.`,
        nudge.node
      )
    )
  }

  if (transformableNudges.isEmpty()) {
    return file.source
  }

  transformableNudges.renameTo(PULSAR)

  importSpecifiers.add(PULSAR)

  // If all Nudge components were renamed, we can safely remove the import
  if (ignoredNudges.isEmpty()) {
    importDeclarations.findImportSpecifiersByName(NUDGE).remove()
  }

  return root.toSource()
}

export default transformer
