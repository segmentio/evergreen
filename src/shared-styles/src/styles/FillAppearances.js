import { colors } from '../../../colors'

const colorsFiltered = Object.keys(colors).filter(c => c !== 'white')

const getDefaultStyle = colorName => ({
  backgroundColor: colors[colorName]['15A'],
  color: colors[colorName]['1000']
})

const getSolidStyle = colorName => ({
  backgroundColor: colors[colorName]['500'],
  color: 'white'
})

const FillAppearances = {
  default: {},
  solid: {}
}

colorsFiltered.forEach(c => {
  FillAppearances.default[c] = getDefaultStyle(c)
  FillAppearances.solid[c] = getSolidStyle(c)
})

export default FillAppearances
