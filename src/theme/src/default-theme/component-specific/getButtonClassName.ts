// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../themer' or its cor... Remove this comment to see the full error message
import { Themer } from '../../../../themer'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/scales'... Remove this comment to see the full error message
import scales from '../foundational-styles/scales'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../helpers' or its correspondi... Remove this comment to see the full error message
import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../helpers'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../shared' or its correspondin... Remove this comment to see the full error message
import { defaultControlStyles } from '../shared'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../utils/memoizeClassName' or ... Remove this comment to see the full error message
import memoizeClassName from '../utils/memoizeClassName'

/**
 * Disabled styles are all the same for all buttons.
 */
const { disabled } = defaultControlStyles

/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance: any, intent: any) => {
  switch (appearance) {
    case 'primary': {
      const { focusColor, linearGradient } = getPrimaryButtonStylesForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: 'white',
          backgroundColor: 'white',
          backgroundImage: linearGradient.base,
          boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 -1px 1px 0 ${scales.neutral.N2A}`,
        },
        hover: {
          backgroundImage: linearGradient.hover,
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 -1px 1px 0 ${scales.neutral.N5A}`,
        },
        active: {
          backgroundImage: linearGradient.active,
          boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${scales.neutral.N2A}`,
        },
        focusAndActive: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${scales.neutral.N4A}, inset 0 1px 1px 0 ${scales.neutral.N2A}`,
        },
      })
    }

    case 'minimal': {
      const intentTextColor = getTextColorForIntent(intent, scales.blue.B9)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'transparent',
        },
        hover: {
          backgroundColor: scales.neutral.N2A,
        },
        focus: {
          boxShadow: `0 0 0 3px ${scales.blue.B5A}`,
        },
        active: {
          backgroundImage: 'none',
          backgroundColor: scales.blue.B3A,
        },
        focusAndActive: {},
      })
    }

    case 'default':
    default: {
      const intentTextColor = getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          ...defaultControlStyles.base,
        },
        hover: defaultControlStyles.hover,
        focus: defaultControlStyles.focus,
        active: defaultControlStyles.active,
        focusAndActive: defaultControlStyles.focusAndActive,
      })
    }
  }
}

/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getButtonAppearance)
