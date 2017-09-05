import colors from 'evergreen-colors'

const LayerAppearances = {
  tint1: { backgroundColor: colors.neutral['3A'] },
  tint2: { backgroundColor: colors.neutral['5A'] },
  tint3: { backgroundColor: colors.neutral['7A'] },

  dark: { backgroundColor: colors.neutral['800'] },

  selected: {
    backgroundColor: colors.blue['10A'],
    boxShadow: `inset 0 0 0 1px ${colors.blue['30A']}`,
  },
}

export default LayerAppearances
