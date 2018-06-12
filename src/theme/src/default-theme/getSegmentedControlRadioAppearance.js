import { Themer } from '../../../themer'
import { defaultControlStyles } from './shared'

const defaultAppearance = Themer.createSegmentedControlRadioAppearance({
  base: defaultControlStyles.base,
  disabled: defaultControlStyles.disabled,
  hover: defaultControlStyles.hover,
  active: defaultControlStyles.active
})

const getSegmentedControlRadioAppearance = () => {
  return defaultAppearance
}

export default getSegmentedControlRadioAppearance
