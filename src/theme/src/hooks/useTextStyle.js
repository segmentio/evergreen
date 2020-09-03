import useTheme from '../useTheme'

function useTextStyle({ size, color, fontFamily }) {
  const {
    tokens: { text, fontFamilies, colors }
  } = useTheme()

  return {
    ...text[size],
    color: colors[color] || color,
    fontFamily: fontFamilies[fontFamily] || fontFamilies.ui
  }
}

export default useTextStyle
