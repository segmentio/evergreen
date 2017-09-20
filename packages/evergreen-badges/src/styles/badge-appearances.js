import colors from 'evergreen-colors'

const colorsFiltered = Object.keys(colors).filter(c => c !== 'white')

const getDefaultBadge = colorName => ({
  backgroundColor: colors[colorName]['15A'],
  color: colors[colorName]['1000'],
})

const getSolidBadge = colorName => ({
  backgroundColor: colors[colorName]['500'],
  color: 'white',
})

const BadgeAppearances = {
  default: {},
  solid: {},
}

colorsFiltered.forEach(c => {
  BadgeAppearances.default[c] = getDefaultBadge(c)
  BadgeAppearances.solid[c] = getSolidBadge(c)
})

export default BadgeAppearances
