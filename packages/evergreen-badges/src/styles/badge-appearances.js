import colors from 'evergreen-colors'

const baseStyle = {
  boxSizing: 'border-box',
  // backgroundColor: colors.neutral['10A'],
  backgroundColor: 'green',
  'text-transform': 'uppercase',
}

const BadgeAppearances = {
  neutral: {
    ...baseStyle,
    backgroundColor: 'blue',
    color: 'pink',
  },
}

export default BadgeAppearances
