import { minorScale } from '../../../scales'

export default function getInputStyles(theme) {
  const { tokens } = theme

  return {
    baseStyle: {
      border: 'none',
      borderRadius: tokens.borderRadius,
      fontFamily: tokens.fontFamilies.ui,
      lineHeight: '12px',
      MozAppearance: 'none',
      outline: 'none',
      textDecoration: 'none',
      WebkitAppearance: 'none',
      WebkitFontSmoothing: 'antialiased'
    },

    appearances: {
      default: {
        backgroundColor: 'white',
        border: `1px solid ${tokens.colors.gray400}`,

        _invalid: {
          borderColor: tokens.colors.red500
        },

        _focus: {
          outline: 'none',
          transition: 'box-shadow 80ms ease-in-out',
          border: `1px solid ${tokens.colors.blue200}`,
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _disabled: {
          cursor: 'not-allowed',
          backgroundColor: tokens.colors.gray100,
          color: tokens.colors.muted
        },

        _placeholder: {
          color: tokens.colors.gray600
        },

        _placeholderHover: {
          color: tokens.colors.gray700
        }
      },
      none: {
        backgroundColor: 'transparent',

        _invalid: {},

        _placeholder: {
          color: tokens.colors.gray600
        },

        _focus: {
          outline: 'none'
        },

        _disabled: {
          backgroundColor: tokens.colors.gray100,
          color: tokens.colors.muted
        }
      }
    },

    sizes: {
      small: {
        ...tokens.text[300],
        height: 24,
        paddingLeft: minorScale(3),
        paddingRight: minorScale(3)
      },
      medium: {
        ...tokens.text[300],
        height: 32,
        paddingLeft: minorScale(3),
        paddingRight: minorScale(3)
      },
      large: {
        ...tokens.text[400],
        height: 40,
        paddingLeft: minorScale(4),
        paddingRight: minorScale(4)
      }
    }
  }
}
