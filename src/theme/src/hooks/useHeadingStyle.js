import useTheme from '../useTheme'

function useHeadingStyle(size) {
  const {
    tokens: { fontFamilies, headings }
  } = useTheme()

  const fontFamily = [500, 600, 700, 800, 900].includes(size)
    ? fontFamilies.display
    : fontFamilies.ui

  return {
    ...headings[size],
    fontFamily
  }
}

export default useHeadingStyle
