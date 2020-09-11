import useTheme from '../useTheme'

function useTextStyle({ color, fontFamily, size }) {
  const {
    tokens: { colors, fontFamilies, text }
  } = useTheme()

  return {
    ...text[size],
    color: colors[color] || color,
    fontFamily: fontFamilies[fontFamily] || fontFamilies.ui
  }
}

export default useTextStyle
