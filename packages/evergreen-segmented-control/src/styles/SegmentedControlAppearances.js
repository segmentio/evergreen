import colors from 'evergreen-colors'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  '[disabled], [data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: colors.neutral['10A'],
    boxShadow: 'none',
    color: colors.neutral['300A'],
  },
}

const hoverState = '&:not([disabled]):not([data-disabled]):hover'
const focusState = '&:not([disabled]):not([data-disabled]):focus'
const activeState =
  '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[data-popover-opened], &:not([disabled]):not([data-disabled])[data-active]'

const SegmentedControlAppearances = {
  default: {
    ...baseStyle,
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.neutral['5A']}, white)`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral[
      '20A'
    ]}, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
    [hoverState]: {
      backgroundImage: `linear-gradient(to top, ${colors.neutral[
        '7A'
      ]}, ${colors.neutral['3A']} )`,
      boxShadow: `inset 0 0 0 1px ${colors.neutral[
        '40A'
      ]}, inset 0 -1px 1px 0 ${colors.neutral['15A']}`,
    },
    [focusState]: {
      zIndex: 2,
      boxShadow: `0 0 0 2px ${colors.blue['20A']}, inset 0 0 0 1px ${colors
        .neutral['70A']}, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
    },
    [activeState]: {
      zIndex: 2,
      color: colors.blue['500'],
      backgroundImage: 'none',
      backgroundColor: colors.blue['10A'],
      // boxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`,
    },
    '&[data-active]': {
      cursor: 'default',
    },
  },
}

export default SegmentedControlAppearances
