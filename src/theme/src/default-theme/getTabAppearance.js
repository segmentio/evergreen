import { Themer } from '../../../themer'
import scales from './scales'

const defaultAppearance = Themer.createTabAppearance({
  base: {},
  hover: {
    backgroundColor: scales.neutral.N2A
  },
  focus: {
    boxShadow: `0 0 0 2px ${scales.blue.B5A}`
  },
  active: {
    backgroundColor: scales.blue.B3A,
    color: scales.blue.B9
  },
  current: {}
})

const getTabAppearance = () => {
  return defaultAppearance
}

export default getTabAppearance
