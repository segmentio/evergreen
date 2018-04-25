import { colors } from '../../../colors'
import { Themer } from '../../../themer'

const SelectAppearances = {}

SelectAppearances.default = Themer.createSelectAppearance({
  base: {
    transition: 'box-shadow 80ms ease-in-out',
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.neutral['5A']}, ${
      colors.white['5A']
    })`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}, inset 0 -1px 1px 0 ${
      colors.neutral['10A']
    }`
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: colors.neutral['10A'],
    boxShadow: 'none',
    color: colors.neutral['300A']
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${colors.red['500']}, inset 0 1px 2px ${
      colors.neutral['40A']
    }`
  },
  hover: {
    backgroundImage: `linear-gradient(to top, ${colors.neutral['7A']}, ${
      colors.neutral['3A']
    } )`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['40A']}, inset 0 -1px 1px 0 ${
      colors.neutral['15A']
    }`
  },
  focus: {
    boxShadow: `0 0 0 3px ${colors.blue['20A']}, inset 0 0 0 1px ${
      colors.neutral['70A']
    }, inset 0 -1px 1px 0 ${colors.neutral['10A']}`
  },
  active: {
    color: colors.blue['1000'],
    backgroundImage: 'none',
    backgroundColor: colors.blue['10A'],
    boxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`
  }
})

export default SelectAppearances
