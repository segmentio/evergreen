import { getPrimaryButtonStylesForIntent } from '../deprecated/helpers'

const baseStyle = {}

const appearances = {
  default: {
    _base: {
      color: 'transparent',
      background: theme => `linear-gradient(to top, ${theme.scales.neutral.N2A}, white)`,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N3A}`
    },
    _disabled: {
      cursor: 'not-allowed',
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}`,
      background: 'scales.neutral.N2A'
    },
    _hover: {
      background: theme => `linear-gradient(to top, ${theme.scales.neutral.N2A}, ${theme.scales.neutral.N1A})`,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`
    },
    _focus: {
      boxShadow: theme =>
        `0 0 0 2px ${theme.scales.blue.B4A}, inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N3A}`
    },
    _active: {
      background: 'scales.blue.B3A',
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.blue.B5A}`
    },
    _checked: {
      color: 'white',
      background: getPrimaryButtonStylesForIntent().linearGradient.base,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`
    },
    _checkedHover: {
      color: 'white',
      background: getPrimaryButtonStylesForIntent().linearGradient.hover,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N5A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`
    },
    _checkedDisabled: {
      color: 'scales.neutral.N6A',
      background: theme => `linear-gradient(to top, ${theme.scales.neutral.N2A}, ${theme.scales.neutral.N1A})`,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`
    },
    _checkedActive: {
      color: 'white',
      background: getPrimaryButtonStylesForIntent().linearGradient.active,
      boxShadow: theme => `inset 0 0 0 1px ${theme.scales.neutral.N4A}, inset 0 -1px 1px 0 ${theme.scales.neutral.N2A}`
    }
  }
}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
