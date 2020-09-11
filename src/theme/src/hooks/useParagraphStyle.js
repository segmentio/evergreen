import useTheme from '../useTheme'

function useParagraphStyle(size, color) {
  const {
    tokens: { colors, fontFamilies, paragraph }
  } = useTheme()

  return {
    ...paragraph[size],
    color: colors[color] || color,
    fontFamily: fontFamilies.ui
  }
}

export default useParagraphStyle
