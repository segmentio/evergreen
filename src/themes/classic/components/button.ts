import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../deprecated/helpers'
import { defaultControlStyles } from '../deprecated/shared'

const baseStyle = {
  fontFamily: 'fontFamilies.ui',
  borderRadius: 'radii.1',
  fontWeight: 500,
  border: '0',
  color: (theme: any, { color }: any) => theme.colors[color] || color || 'colors.default',
  _disabled: {
    ...defaultControlStyles.disabled,
  },
}

const appearances = {
  primary: {
    backgroundColor: 'white',
    backgroundImage: (_: any, props: any) => getPrimaryButtonStylesForIntent(props.intent).linearGradient.base,
    boxShadow: (theme: any) =>
      `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`,
    color: 'white',
    _focus: {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'focus' does not exist on type '{ base: s... Remove this comment to see the full error message
      backgroundImage: (_: any, props: any) => getPrimaryButtonStylesForIntent(props.intent).linearGradient.focus,
      boxShadow: (theme: any, props: any) =>
        `0 0 0 3px ${getPrimaryButtonStylesForIntent(props.intent).focusColor}, inset 0 0 0 1px ${
          theme.scales.neutral.N4A
        }, inset 0 -1px 1px 0 ${theme.scales.neutral.N5A}`,
    },
    _hover: {
      backgroundImage: (_: any, props: any) => getPrimaryButtonStylesForIntent(props.intent).linearGradient.hover,
    },
    _active: {
      backgroundImage: (_: any, props: any) => getPrimaryButtonStylesForIntent(props.intent).linearGradient.active,
    },
    _focusAndActive: {},
  },

  default: {
    ...defaultControlStyles.base,
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    color: (_: any, props: any) => getTextColorForIntent(props.intent),
    _hover: defaultControlStyles.hover,
    _active: defaultControlStyles.active,
    _focus: defaultControlStyles.focus,
    _disabled: defaultControlStyles.disabled,
  },
  minimal: {
    color: (theme: any, props: any) => getTextColorForIntent(props.intent, theme.colors.blue.base),
    background: 'transparent',
    _hover: {
      background: 'scales.neutral.N2A',
    },
    _focus: {
      boxShadow: (theme: any) => `0 0 0 3px ${theme.colors.blueAlpha.B5A}`,
    },
    _active: {
      background: 'scales.blue.B3A',
    },
  },
}

const sizes = {
  small: {
    height: 24,
    minWidth: 24,
    fontSize: 'fontSizes.1',
    lineHeight: '24px',
    paddingLeft: 12,
    paddingRight: 12,
  },
  medium: {
    height: 32,
    minWidth: 32,
    fontSize: 'fontSizes.1',
    lineHeight: '32px',
    paddingLeft: 16,
    paddingRight: 16,
  },
  large: {
    height: 40,
    minWidth: 40,
    fontSize: 'fontSizes.2',
    lineHeight: '40px',
    paddingLeft: 20,
    paddingRight: 20,
  },
}

export default {
  baseStyle,
  appearances,
  sizes,
}
