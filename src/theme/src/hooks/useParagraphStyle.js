import useTheme from '../useTheme'

function useTextStyle(size, color) {
  const {
    tokens: { paragraph, fontFamilies, colors }
  } = useTheme()

  return {
    ...paragraph[size],
    color: colors[color] || color,
    fontFamily: fontFamilies.ui
  }
}

export default useTextStyle
