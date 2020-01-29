import codeColors from './codeColors'

/**
 * Get the themed properties for a `Code` text component.
 * @param {string} appearance - default, minimal.
 * @param {Object} theme - the theme object
 * @return {string} the themd properties.
 */
const getCodeProps = (appearance, theme) => {
  const defaultBackground =
    theme?.codeColors?.backgroundColor || codeColors.backgroundColor
  const defaultShadow = theme?.codeColors?.shadowColor || codeColors.shadowColor

  switch (appearance) {
    case 'minimal':
      return {}
    case 'default':
    default:
      // Passing padding and border radius is non-ideal here.
      return {
        backgroundColor: defaultBackground,
        boxShadow: `inset 0 0 0 1px ${defaultShadow}`,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      }
  }
}

export default getCodeProps
