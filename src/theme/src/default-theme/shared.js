import { linearGradient } from './helpers'
import defaultControlColors from './component-specific/defaultControlColors'
import scales from './foundational-styles/scales'

const getDefaultControlStyles = theme => {
  const N2A = theme?.scales?.neutral?.N2A || scales.neutral.N2A
  const N4A = theme?.scales?.neutral?.N4A || scales.neutral.N4A
  const N5A = theme?.scales?.neutral?.N5A || scales.neutral.N5A
  const N7A = theme?.scales?.neutral?.N7A || scales.neutral.N7A

  return {
    disabled: {
      opacity: 0.8,
      backgroundImage: 'none',
      backgroundColor: N2A,
      boxShadow: 'none',
      color: N7A,
      pointerEvents: 'none'
    },
    base: {
      backgroundColor:
        theme?.defaultControlColors?.base?.backgroundColor ||
        defaultControlColors.base.backgroundColor,
      backgroundImage: linearGradient(
        theme?.defaultControlColors?.base?.gradientStart ||
          defaultControlColors.base.gradientEnd,
        theme?.defaultControlColors?.base?.gradientEnd ||
          defaultControlColors.base.gradientEnd
      ),
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 -1px 1px 0 ${N2A}`
    },
    hover: {
      backgroundImage: linearGradient(
        theme?.defaultControlColors?.hover?.gradientStart ||
          defaultControlColors.hover.gradientStart,
        theme?.defaultControlColors?.hover?.gradientEnd ||
          defaultControlColors.hover.gradientEnd
      )
    },
    focus: {
      boxShadow: `0 0 0 3px ${theme?.defaultControlColors?.focus?.shadowColor ||
        defaultControlColors.focus
          .shadowColor}, inset 0 0 0 1px ${N5A}, inset 0 -1px 1px 0 ${N4A}`
    },
    active: {
      backgroundImage: 'none',
      backgroundColor:
        theme?.defaultControlColors?.active?.backgroundColor ||
        defaultControlColors.active.backgroundColor,
      boxShadow: `inset 0 0 0 1px ${N4A}, inset 0 1px 1px 0 ${N2A}`
    },
    focusAndActive: {
      boxShadow: `0 0 0 3px ${theme?.defaultControlColors?.focusAndActive
        ?.shadowColor ||
        defaultControlColors.focusAndActive
          .shadowColor}, inset 0 0 0 1px ${N5A}, inset 0 1px 1px 0 ${N2A}`
    }
  }
}

// Can't figure out to disable rule for xo linter.
const ignore = null

export { getDefaultControlStyles, ignore }
