import { Themer } from '../../../themer'
import { colors } from '../../../colors'

const CheckboxAppearances = {}

CheckboxAppearances.default = Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.neutral['5A']}, white)`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}, inset 0 -1px 1px 0 ${
      colors.neutral['10A']
    }`
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`,
    backgroundColor: colors.neutral['5A'],
    backgroundImage: 'none'
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
    boxShadow: `0 0 0 2px ${colors.blue['20A']}, inset 0 0 0 1px ${
      colors.neutral['70A']
    }, inset 0 -1px 1px 0 ${colors.neutral['10A']}`
  },
  active: {
    color: colors.blue['1000'],
    backgroundImage: 'none',
    backgroundColor: colors.blue['10A'],
    boxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`
  },
  checked: {
    backgroundColor: colors.blue['500'],
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.blue['600']}, ${
      colors.blue['400']
    })`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['30A']}, inset 0 -1px 1px 0 ${
      colors.neutral['30A']
    }`
  },
  checkedDisabled: {
    color: colors.neutral['300'],
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.neutral['5A']}, white)`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}, inset 0 -1px 1px 0 ${
      colors.neutral['10A']
    }`
  },
  checkedActive: {
    backgroundColor: colors.blue['500'],
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.blue['800']}, ${
      colors.blue['900']
    })`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral['30A']}, inset 0 -1px 1px 0 ${
      colors.neutral['30A']
    }`
  }
})

export default CheckboxAppearances
