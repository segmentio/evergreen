export default function getTableCellStyles(theme) {
  const { tokens } = theme
  return {
    baseStyle: {
      paddingX: 12,
      boxSizing: 'border-box',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      overflow: 'hidden'
    },
    appearances: {
      default: {
        _focus: {
          outline: 'none',
          background: tokens.colors.blue50,
          boxShadow: `inset 0 0 0 1px ${tokens.colors.blue500}`
        }
      }
    }
  }
}
