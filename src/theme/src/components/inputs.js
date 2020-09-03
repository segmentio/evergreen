import { majorScale, minorScale } from '../../../scales'

export default function getInputStyles(theme) {
  const { tokens } = theme

  return {
    baseStyle: {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      lineHeight: '12px',
      border: 'none',
      borderRadius: '4px',
      fontFamily: tokens.fontFamilies.ui
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
          backgroundColor: tokens.colors.gray100
        },

        _placeholder: {
          color: tokens.colors.gray600
        },

        _placeholderHover: {
          color: tokens.colors.gray700
        }
      },
      none: {
        backgroundColor: 'white',

        _invalid: {},

        _placeholder: {
          color: tokens.colors.gray600
        },

        _focus: {
          outline: 'none'
        },

        _disabled: {
          backgroundColor: tokens.colors.gray100
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
