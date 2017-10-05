import colors from 'evergreen-colors'

const baseStyle = {
  WebkitAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  outline: 'none',
  cursor: 'pointer',
  '[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: colors.neutral['10A'],
    boxShadow: 'none',
    color: colors.neutral['300A'],
  },
  '&[aria-invalid]': {
    boxShadow: `inset 0 0 0 1px ${colors.red['500']}, inset 0 1px 2px ${colors
      .neutral['40A']}`,
  },
}

const SelectAppearances = {
  default: {
    ...baseStyle,
    backgroundColor: 'white',
    backgroundImage: `linear-gradient(to top, ${colors.neutral['5A']}, white)`,
    boxShadow: `inset 0 0 0 1px ${colors.neutral[
      '20A'
    ]}, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
    '&:not([disabled]):hover': {
      backgroundImage: `linear-gradient(to top, ${colors.neutral[
        '7A'
      ]}, ${colors.neutral['3A']} )`,
      boxShadow: `inset 0 0 0 1px ${colors.neutral[
        '40A'
      ]}, inset 0 -1px 1px 0 ${colors.neutral['15A']}`,
    },
    '&:not([disabled]):focus': {
      boxShadow: `0 0 0 2px ${colors.blue['20A']}, inset 0 0 0 1px ${colors
        .neutral['70A']}, inset 0 -1px 1px 0 ${colors.neutral['10A']}`,
    },
    '&:not([disabled]):active': {
      color: colors.blue['1000'],
      backgroundImage: 'none',
      backgroundColor: colors.blue['10A'],
      boxShadow: `inset 0 0 0 1px ${colors.blue['80A']}`,
    },
  },
}

export default SelectAppearances
