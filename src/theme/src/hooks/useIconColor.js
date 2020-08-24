import useTheme from '../useTheme'

const useIconColor = color => {
  const {
    tokens: { intents, states, colors }
  } = useTheme()

  // If the value is an intent (success, danger, warning, or info)
  if (Object.prototype.hasOwnProperty.call(intents, color)) {
    return intents[color].icon
  }

  // If the value is a state (default, muted, disabled, selected, dark)
  if (Object.prototype.hasOwnProperty.call(states, color)) {
    return states[color].icon
  }

  // If the value is a color name (gray600, etc.)
  if (Object.prototype.hasOwnProperty.call(colors, color)) {
    return colors[color]
  }

  return color
}

export default useIconColor
