import useTheme from '../useTheme'

function useTextStyle(size, color) {
  const {
    tokens: { text, fontFamilies, colors }
  } = useTheme()

  return {
    ...text[size],
    color: colors[color] || color,
    fontFamily: fontFamilies.ui
  }
}

export default useTextStyle
