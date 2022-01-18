import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { useId } from '../../hooks'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import Radio from './Radio'

const noop = () => {}
const emptyArray: any = []

const RadioGroup = memo(
  forwardRef(function RadioGroup(props, ref) {
    const {
      size = 12,
      label,
      defaultValue,
      value,
      options = emptyArray,
      onChange = noop,
      isRequired = false,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const name = useId('RadioGroup')
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'options' does not exist on type 'never'.
    const selected = value || defaultValue || props.options[0].value

    return (
      <Pane role="group" aria-label={label} {...rest} ref={ref}>
        {label && (
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          <Text color="muted" fontWeight={500}>
            {label}
          </Text>
        )}
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
        {options.map(item => (
          <Radio
            key={item.value}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
            size={size}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            name={name}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            value={item.value}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            label={item.label}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
            checked={selected === item.value}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            disabled={item.isDisabled}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
            onChange={onChange}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
            isRequired={isRequired}
          />
        ))}
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
RadioGroup.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The options for the radios of the Radio Group.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool
    })
  ).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: PropTypes.string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: PropTypes.string,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * Label to display above the radio button options.
   */
  label: PropTypes.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool
}

export default RadioGroup
