// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../themer' or its cor... Remove this comment to see the full error message
import { Themer } from '../../../../themer'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/palette... Remove this comment to see the full error message
import palette from '../foundational-styles/palette'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../foundational-styles/scales'... Remove this comment to see the full error message
import scales from '../foundational-styles/scales'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../utils/memoizeClassName' or ... Remove this comment to see the full error message
import memoizeClassName from '../utils/memoizeClassName'

const Appearances = {}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
Appearances.default = Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N5A}, inset 0 1px 2px ${scales.neutral.N4A}`,
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}, inset 0 1px 2px ${scales.neutral.N4A}`,
  },
  placeholder: {
    color: scales.neutral.N6A,
  },
  focus: {
    outline: 'none',
    boxShadow: `inset 0 0 2px ${scales.neutral.N4A}, inset 0 0 0 1px ${scales.blue.B7}, 0 0 0 3px ${scales.blue.B4A}`,
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2,
  },
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'neutral' does not exist on type '{}'.
Appearances.neutral = Themer.createInputAppearance({
  base: {
    backgroundColor: scales.neutral.N2A,
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}`,
  },
  placeholder: {
    color: scales.neutral.N6A,
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: `0 0 0 2px ${scales.blue.B6A}`,
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2,
  },
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'editableCell' does not exist on type '{}... Remove this comment to see the full error message
Appearances.editableCell = Themer.createInputAppearance({
  base: {
    backgroundColor: scales.neutral.N2A,
  },
  invalid: {
    boxShadow: `inset 0 0 0 1px ${palette.red.base}`,
  },
  placeholder: {
    color: scales.neutral.N6A,
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: `0 0 0 2px ${scales.blue.B7}`,
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
    backgroundColor: scales.neutral.N2,
  },
})

/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */
const getTextareaAppearance = (appearance: any) => {
  switch (appearance) {
    case 'neutral':
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'neutral' does not exist on type '{}'.
      return Appearances.neutral
    case 'editable-cell':
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'editableCell' does not exist on type '{}... Remove this comment to see the full error message
      return Appearances.editableCell
    default:
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'default' does not exist on type '{}'.
      return Appearances.default
  }
}

/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getTextareaAppearance)
