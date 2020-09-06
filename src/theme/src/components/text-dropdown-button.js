import { minorScale } from '../../../scales'
import { controlStyles } from '../shared'

export default function getTextDropdownButtonStyles(theme) {
  const { tokens } = theme
  const disabledStyles = controlStyles._disabled

  return {
    baseStyle: {
      WebkitFontSmoothing: 'antialiased',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      border: 'none',
      fontFamily: tokens.fontFamilies.ui,
      paddingX: minorScale(1),
      marginX: minorScale(-1),
      paddingY: 2,
      marginY: -2,
      outline: 'none',
      cursor: 'pointer',
      background: 'none',
      borderRadius: tokens.borderRadius
    },

    appearances: {
      default: {
        _hover: {},
        _disabled: { ...disabledStyles },
        _focus: {
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`,
          transition: 'box-shadow 80ms ease-in-out'
        }
      }
    },

    sizes: {
      small: {
        ...tokens.text[300],
        height: 16,
        minWidth: 24
      },
      medium: {
        ...tokens.text[300],
        height: 16,
        minWidth: 32
      },
      large: {
        ...tokens.text[400],
        height: 20,
        minWidth: 40
      }
    }
  }
}
