import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { Button } from '../../buttons'
import { Group } from '../../group'
import { useId } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'

function isControlled(value: any) {
  return typeof value !== 'undefined' && value !== null
}

const SegmentedControl = memo(
  forwardRef(function SegmentedControl(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { defaultValue, disabled, height, name, onChange, options, size, value, ...rest } = props

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    const groupName = useId('SegmentedControl')

    if (process.env.NODE_ENV !== 'production') {
      warning(
        true,
        '<SegmentedControl> is deprecated and will be removed in the next major verison of Evergreen. Prefer Tabs for navigational elements, or form components / button groups for other use cases.'
      )
    }

    const getDefaultValue = () => {
      if (isControlled(value)) {
        return value
      }

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type 'never'.
      return typeof defaultValue !== 'undefined' && defaultValue !== null ? defaultValue : options[0].value
    }

    const [activeValue, setActiveValue] = useState(getDefaultValue())

    useEffect(() => {
      if (isControlled(value)) {
        setActiveValue(value)
      }
    }, [value])

    const handleChange = useCallback(
      event => {
        event.preventDefault()
        const newValue = event.target.value

        // Save a render cycle when it's a controlled input
        if (!isControlled(value)) {
          setActiveValue(newValue)
        }

        safeInvoke(onChange, newValue)
      },
      [value, onChange]
    )

    return (
      <Group ref={ref} display="flex" {...rest}>
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type 'never'.
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type 'never'.
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type 'never'.
        {options.map((option: any, index: any) => (
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <Button
            key={option.value}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            id={groupName + index}
            name={name || groupName}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            value={String(option.value)}
            disabled={disabled}
            size={size}
            height={height}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
            isActive={activeValue === String(option.value)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '(event: any) => void' is not assignable to t... Remove this comment to see the full error message
            onClick={handleChange}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            flex="1"
          >
            {option.label}
          </Button>
        ))}
      </Group>
    );
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
SegmentedControl.propTypes = {
  /**
   * Composes some Box APIs.
   */
  ...spacing.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...dimensions.propTypes,

  /**
   * The options for the radios of the Segmented Control.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired
    })
  ).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /**
   * Function called when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * The name of the radio group.
   */
  name: PropTypes.string,

  /**
   * The size of the Segmented Control.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: PropTypes.bool
}

export default SegmentedControl
