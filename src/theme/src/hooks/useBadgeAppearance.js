import useTheme from '../useTheme'

function useBadgeAppearance({ color }) {
  const {
    tokens: { fills }
  } = useTheme()

  if (color === 'automatic') {
    const fillKeys = Object.keys(fills)
    return fills[fillKeys[Math.floor(Math.random() * fillKeys.length)]]
  }

  return fills[color]
}

export default useBadgeAppearance
