import useTheme from '../useTheme'

function useHeadingStyle(size) {
  const {
    tokens: { headings }
  } = useTheme()

  return headings[size]
}

export default useHeadingStyle
