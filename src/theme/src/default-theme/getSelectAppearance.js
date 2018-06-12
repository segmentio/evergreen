import { Themer } from '../../../themer'
import { defaultControlStyles } from './shared'
import scales from './scales'
import palette from './palette'

const SelectAppearances = {}

SelectAppearances.default = Themer.createSelectAppearance({
  base: defaultControlStyles.base,
  disabled: defaultControlStyles.disabled,
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${
      scales.neutral.N4A
    }`
  },
  hover: defaultControlStyles.hover,
  focus: defaultControlStyles.focus,
  active: defaultControlStyles.active
})

const getSelectAppearance = () => {
  return SelectAppearances.default
}

export default getSelectAppearance
