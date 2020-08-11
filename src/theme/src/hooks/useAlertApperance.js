import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'

const base = {
  borderRadius: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '16px'
}

function useAlertApperance(intent) {
  const {
    tokens: { intents }
  } = useTheme()

  const borderColor = intents[intent].border
  const backgroundColor = intents[intent].background

  return {
    ...base,
    borderColor,
    backgroundColor
  }
}

export default memoizeClassName(useAlertApperance)
