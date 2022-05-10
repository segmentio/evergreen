// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../themer' or its cor... Remove this comment to see the full error message
import { Themer } from '../../../../themer'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/palette... Remove this comment to see the full error message
import palette from '../foundational-styles/palette'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/scales'... Remove this comment to see the full error message
import scales from '../foundational-styles/scales'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../shared' or its correspondin... Remove this comment to see the full error message
import { defaultControlStyles } from '../shared'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../utils/memoizeClassName' or ... Remove this comment to see the full error message
import memoizeClassName from '../utils/memoizeClassName'

const SelectAppearances = {}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
SelectAppearances.default = Themer.createSelectAppearance({
  base: defaultControlStyles.base,
  disabled: defaultControlStyles.disabled,
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${scales.neutral.N4A}`,
  },
  hover: defaultControlStyles.hover,
  focus: defaultControlStyles.focus,
  active: defaultControlStyles.active,
})

/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */
const getSelectAppearance = () => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
  return SelectAppearances.default
}

/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getSelectAppearance)
