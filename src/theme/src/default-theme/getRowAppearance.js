import { Themer } from '../../../themer'
import scales from './scales'

const defaultRowAppearance = Themer.createRowAppearance({
  base: {},

  hover: {
    backgroundColor: scales.neutral.N1A
  },

  focus: {
    backgroundColor: scales.blue.B1A
  },

  active: {
    backgroundColor: scales.blue.B2A,
    color: scales.blue.B8
  },

  current: {
    cursor: 'default'
  }
})

const getRowAppearance = () => {
  return defaultRowAppearance
}

export default getRowAppearance
