import colors from 'evergreen-colors'

const baseStyle = {
  boxSizing: 'border-box',
  textDecoration: 'none',
  textTransform: 'uppercase',
  borderRadius: 2,
}

const BadgeAppearances = {
  neutral: { ...baseStyle },
  red: { ...baseStyle },
  green: { ...baseStyle },
  blue: { ...baseStyle },
  purple: { ...baseStyle },
  pink: { ...baseStyle },
  yellow: { ...baseStyle },
  turquoise: { ...baseStyle },
}

export default BadgeAppearances
