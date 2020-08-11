import useTheme from '../useTheme'

const useIconColor = (color) => {
  const {
    tokens: { intents, states }
  } = useTheme()

  if (Object.prototype.hasOwnProperty.call(intents, color)) {
    return intents[color].icon
  }

  if (Object.prototype.hasOwnProperty.call(states, color)) {
    return states[color].icon
  }

  return color
}

export default useIconColor