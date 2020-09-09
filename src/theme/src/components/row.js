import tinycolor from 'tinycolor2'

export default function getRowStyles(theme) {
  const { tokens } = theme

  return {
    baseStyle: {
      outline: 'none',
      textDecoration: 'none',

      '&[data-isselectable="true"]': {
        cursor: 'pointer'
      }
    },

    appearances: {
      default: {
        _hover: {
          backgroundColor: tokens.colors.gray75
        },

        _focus: {
          backgroundColor: tokens.colors.gray75
        },

        _active: {
          backgroundColor: tokens.intents.info.background
        },

        _current: {
          backgroundColor: tokens.intents.info.background
        }
      },
      destructive: {
        backgroundColor: tokens.intents.danger.background,

        _hover: {
          backgroundColor: tinycolor(tokens.intents.danger.background)
            .darken(1)
            .toString()
        },

        _focus: {
          backgroundColor: tinycolor(tokens.intents.danger.background)
            .darken(1)
            .toString()
        },

        _current: {
          backgroundColor: tokens.colors.red100
        },

        _active: {
          backgroundColor: tokens.colors.red100
        }
      },
      warning: {
        backgroundColor: tokens.intents.warning.background,

        _hover: {
          backgroundColor: tinycolor(tokens.intents.warning.background)
            .darken(1)
            .toString()
        },

        _focus: {
          backgroundColor: tinycolor(tokens.intents.warning.background)
            .darken(1)
            .toString()
        },

        _current: {
          backgroundColor: tokens.colors.yellow100
        },

        _active: {
          backgroundColor: tokens.colors.yellow100
        }
      },
      success: {
        backgroundColor: tokens.intents.success.background,

        _hover: {
          backgroundColor: tinycolor(tokens.intents.success.background)
            .darken(1)
            .toString()
        },

        _focus: {
          backgroundColor: tinycolor(tokens.intents.success.background)
            .darken(1)
            .toString()
        },

        _current: {
          backgroundColor: tokens.colors.green100
        },

        _active: {
          backgroundColor: tokens.colors.green100
        }
      }
    }
  }
}