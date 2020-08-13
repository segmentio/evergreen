import useTheme from '../useTheme'

const baseStyle = {
  paddingY: 8,
  paddingX: 16,
  elevation: 3
}

function useTooltipStyle(appearance) {
  const {
    tokens: { colors }
  } = useTheme()

  switch (appearance) {
    case 'card':
      return {
        ...baseStyle,
        backgroundColor: 'white'
      }

    case 'default':
    default:
      return {
        ...baseStyle,
        color: 'white',
        backgroundColor: colors.gray800
      }
  }
}

export default useTooltipStyle
