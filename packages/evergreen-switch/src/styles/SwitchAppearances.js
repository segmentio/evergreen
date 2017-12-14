import colors from 'evergreen-colors'

const disabledState = '&[disabled] + div'
const hoverState = '&:not([disabled]):hover + div'
const focusState = '&:not([disabled]):focus + div'
const activeState = '&:not([disabled]):active + div'
const checkedState = '&:checked + div'
const checkedActiveState = '&:not([disabled]):checked:active + div'
const checkedDisabledState = '&[disabled]:checked + div'

const hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
}

const SwitchAppearances = {
  default: {
    ...hiddenCheckboxStyle,
    '& + div > svg': {
      display: 'none'
    },
    '& + div': {
      transition: 'all 200ms ease-in-out',
      cursor: 'pointer',
      color: 'white',
      boxSizing: 'border-box',
      backgroundColor: colors.neutral['100A'],
      borderRadius: 9999,
      boxShadow: `inset 0 0 0 1px ${
        colors.neutral['20A']
      }, inset 0 -1px 1px 0 ${colors.neutral['10A']}`
    },
    [disabledState]: {
      cursor: 'not-allowed',
      boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`,
      backgroundColor: colors.neutral['30A'],
      backgroundImage: 'none'
    },
    [hoverState]: {
      backgroundImage: `linear-gradient(to top, ${colors.neutral['7A']}, ${
        colors.neutral['3A']
      } )`,
      boxShadow: `inset 0 0 0 1px ${
        colors.neutral['40A']
      }, inset 0 -1px 1px 0 ${colors.neutral['15A']}`
    },
    [focusState]: {
      boxShadow: `0 0 0 3px ${colors.blue['20A']}, inset 0 0 0 1px ${
        colors.neutral['70A']
      }, inset 0 -1px 1px 0 ${colors.neutral['10A']}`
    },
    [activeState]: {
      backgroundImage: 'none',
      backgroundColor: colors.neutral['200A']
      // BoxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`,
    },
    [checkedState]: {
      backgroundColor: colors.blue['500'],
      color: 'white',
      backgroundImage: `linear-gradient(to top, ${colors.blue['500']}, ${
        colors.blue['600']
      })`,
      boxShadow: `inset 0 0 0 1px ${
        colors.neutral['30A']
      }, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
      '& > svg': {
        display: 'block'
      }
    },
    [checkedDisabledState]: {
      color: 'white',
      backgroundColor: 'white',
      backgroundImage: `linear-gradient(to top, ${colors.neutral['300']}, ${
        colors.neutral['400']
      })`,
      boxShadow: `inset 0 0 0 1px ${
        colors.neutral['20A']
      }, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
      '& > svg': {
        display: 'block'
      }
    },
    [checkedActiveState]: {
      backgroundColor: colors.blue['500'],
      color: 'white',
      backgroundImage: `linear-gradient(to top, ${colors.blue['800']}, ${
        colors.blue['900']
      })`,
      boxShadow: `inset 0 0 0 1px ${
        colors.neutral['30A']
      }, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
      '& > svg': {
        display: 'block'
      }
    }
  }
}

export default SwitchAppearances
