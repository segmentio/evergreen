export default function getCheckboxStyles(theme) {
  const { tokens } = theme
  return {
    baseStyle: {
      border: '0',
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: '1',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1',
      opacity: '0',

      _display: {
        WebkitFontSmoothing: 'antialiased',
        textDecoration: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      },

      _tickSvg: {
        display: 'none'
      }
    },
    appearances: {
      default: {
        _display: {
          color: 'white',
          backgroundColor: 'white',
          border: `1px solid ${tokens.colors.gray400}`
        },

        _disabled: {
          cursor: 'not-allowed',
          backgroundColor: tokens.colors.gray100
        },

        _hover: {
          borderColor: tokens.colors.gray600
        },

        _focus: {
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _active: {
          backgroundColor: tokens.colors.gray100,
          borderColor: tokens.colors.gray500
        },

        _checked: {
          backgroundColor: tokens.primary.base,
          borderColor: tokens.primary.active,

          '& > svg': { display: 'block' }
        },

        _checkedHover: {
          backgroundColor: tokens.primary.hover,
          borderColor: tokens.primary.hover
        },

        _checkedActive: {
          borderColor: tokens.primary.active,
          backgroundColor: tokens.primary.active
        },

        _checkedDisabled: {
          color: tokens.colors.gray600,
          backgroundColor: tokens.colors.gray100,
          borderColor: tokens.colors.gray400
        }
      }
    }
  }
}
