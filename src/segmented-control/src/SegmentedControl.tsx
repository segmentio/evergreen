import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { Button } from '../../buttons'
import { Group } from '../../group'
import { useId } from '../../hooks'
import safeInvoke from '../../lib/safe-invoke'
import warning from '../../lib/warning'

function isControlled(value) {
  return typeof value !== 'undefined' && value !== null
}

const SegmentedControl = memo(
  forwardRef(function SegmentedControl(props, ref) {
    const { defaultValue, disabled, height, name, onChange, options, size, value, ...rest } = props

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
        {options.map((option, index) => (
          <Button
            key={option.value}
            id={groupName + index}
            name={name || groupName}
            value={String(option.value)}
            disabled={disabled}
            size={size}
            height={height}
            isActive={activeValue === String(option.value)}
            onClick={handleChange}
            flex="1"
          >
            {option.label}
          </Button>
        ))}
      </Group>
    )
  })
)

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
