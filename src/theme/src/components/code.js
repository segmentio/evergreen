export default function getCodeStyles(theme) {
  const {
    tokens: { codeBackgroundColor, codeBorderColor }
  } = theme
  return {
    baseStyle: {},
    appearances: {
      minimal: {},
      default: {
        backgroundColor: codeBackgroundColor,
        boxShadow: `inset 0 0 0 1px ${codeBorderColor}`,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      }
    }
  }
}
