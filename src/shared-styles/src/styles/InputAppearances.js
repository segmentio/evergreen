import { colors } from '../../../colors'
import { Themer } from '../../../themer'

const InputAppearances = {}

InputAppearances.default = Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: `inset 0 0 0 1px ${colors.neutral['30A']}, inset 0 1px 2px ${
      colors.neutral['20A']
    }`
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${colors.red['500']}, inset 0 1px 1px ${
      colors.neutral['40A']
    }`
  },
  placeholder: {
    color: colors.neutral['100A']
  },
  focus: {
    outline: 'none',
    boxShadow: `inset 0 0 2px ${colors.neutral['40A']}, inset 0 0 0 1px ${
      colors.blue['150A']
    }, 0 0 0 3px ${colors.blue['15A']}`
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`,
    backgroundColor: colors.neutral['5A']
  }
})

InputAppearances.neutral = Themer.createInputAppearance({
  base: {
    backgroundColor: colors.neutral['10A']
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${colors.red['500']}`
  },
  placeholder: {
    color: colors.neutral['200A']
  },
  focus: {
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors.blue['150A']}`
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`,
    backgroundColor: colors.neutral['5A']
  }
})

export default InputAppearances
