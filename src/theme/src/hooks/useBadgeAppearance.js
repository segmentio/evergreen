import useTheme from '../useTheme'

function useBadgeAppearance({ color, hashValue }) {
  const {
    tokens: { fills }
  } = useTheme()

  if (color === 'automatic') {
    const fillKeys = Object.keys(fills)

    if (hashValue) {
      return fills[fillKeys[hashValue % fillKeys.length]]
    }

    return fills[fillKeys[Math.floor(Math.random() * fillKeys.length)]]
  }

  return fills[color]
}

export default useBadgeAppearance
