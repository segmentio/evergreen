import colors from 'evergreen-colors'

const colorsFiltered = Object.keys(colors).filter(c => c !== 'white')

const getDefaultBadgeStyle = colorName => ({
  backgroundColor: colors[colorName]['15A'],
  color: colors[colorName]['1000'],
})

const getSolidBadgeStyle = colorName => ({
  backgroundColor: colors[colorName]['500'],
  color: 'white',
})

const BadgeAppearances = {
  default: {},
  solid: {},
}

colorsFiltered.forEach(c => {
  BadgeAppearances.default[c] = getDefaultBadgeStyle(c)
  BadgeAppearances.solid[c] = getSolidBadgeStyle(c)
})

export default BadgeAppearances
