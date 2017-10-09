import colors from 'evergreen-colors'

const baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  borderRadius: 5,
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

const ButtonAppearances = {
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
      boxShadow: `0 0 0 2px ${colors.blue['20A']}, inset 0 0 0 1px ${colors
        .neutral['70A']}, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
    },
    [activeState]: {
      color: colors.blue['1000'],
      backgroundImage: 'none',
      backgroundColor: colors.blue['10A'],
      boxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`,
    },
  },
  blue: {
    ...baseStyle,
    backgroundColor: colors.blue['500'],
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.blue['600']}, ${colors
      .blue['400']})`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral[
      '30A'
    ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    [hoverState]: {
      backgroundImage: `linear-gradient(to top, ${colors.blue['700']}, ${colors
        .blue['500']})`,
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${colors.blue['50A']}, inset 0 0 0 1px ${colors
        .neutral['30A']}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    },
    [activeState]: {
      boxShadow: `inset 0 0 0 1px ${colors.neutral[
        '30A'
      ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
      backgroundImage: `linear-gradient(to top, ${colors.blue['800']}, ${colors
        .blue['900']})`,
    },
  },
  green: {
    ...baseStyle,
    backgroundColor: colors.green['500'],
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.green['600']}, ${colors
      .green['500']})`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral[
      '30A'
    ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    [hoverState]: {
      backgroundImage: `linear-gradient(to top, ${colors.green['700']}, ${colors
        .green['600']})`,
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${colors.green['100A']}, inset 0 0 0 1px ${colors
        .neutral['30A']}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    },
    [activeState]: {
      boxShadow: `inset 0 0 0 1px ${colors.neutral[
        '30A'
      ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
      backgroundImage: `linear-gradient(to top, ${colors.green['800']}, ${colors
        .green['900']})`,
    },
  },
  red: {
    ...baseStyle,
    backgroundColor: colors.green['500'],
    color: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.red['600']}, ${colors
      .red['500']})`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral[
      '30A'
    ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    [hoverState]: {
      backgroundImage: `linear-gradient(to top, ${colors.red['700']}, ${colors
        .red['600']})`,
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${colors.red['100A']}, inset 0 0 0 1px ${colors
        .neutral['30A']}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
    },
    [activeState]: {
      boxShadow: `inset 0 0 0 1px ${colors.neutral[
        '30A'
      ]}, inset 0 -1px 1px 0 ${colors.neutral['30A']}`,
      backgroundImage: `linear-gradient(to top, ${colors.red['800']}, ${colors
        .red['900']})`,
    },
  },
  ghost: {
    ...baseStyle,
    backgroundColor: 'white',
    [hoverState]: {
      backgroundColor: colors.neutral['7A'],
    },
    [focusState]: {
      boxShadow: `0 0 0 2px ${colors.blue['50A']}`,
    },
    [activeState]: {
      color: colors.blue['1000'],
      boxShadow: 'none',
      backgroundColor: colors.blue['10A'],
    },
  },
}

export default ButtonAppearances
