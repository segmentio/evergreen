import React, { memo, forwardRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout, dimensions } from 'ui-box'
import safeInvoke from '../../lib/safe-invoke'
import { useId } from '../../hooks'
import SegmentedControlRadio from './SegmentedControlRadio'

const SegmentedControl = memo(
  forwardRef(function SegmentedControl(props, ref) {
    const {
      value,
      name,
      height = 32,
      options,
      onChange,
      defaultValue,
      disabled,
      ...rest
    } = props

    const groupName = useId('SegmentedControl')

    const isControlled = () => {
      return typeof value !== 'undefined' && value !== null
    }

    const getDefaultValue = () => {
      if (isControlled()) {
        return value
      }

      return typeof defaultValue !== 'undefined' && defaultValue !== null
        ? defaultValue
        : options[0].value
    }

    const [activeValue, setActiveValue] = useState(getDefaultValue())

    useEffect(() => {
      if (isControlled() && value !== activeValue) {
        setActiveValue(value)
      }
    }, [value])

    const handleChange = newValue => {
      // Save a render cycle when it's a controlled input
      if (!isControlled()) {
        setActiveValue(newValue)
      }

      safeInvoke(onChange, newValue)
    }

    return (
      <Box display="flex" marginRight={-1} height={height} ref={ref} {...rest}>
        {options.map((option, index) => (
          <SegmentedControlRadio
            key={option.value}
            id={groupName + index}
            name={name || groupName}
            label={option.label}
            value={String(option.value)}
            height={height}
            checked={activeValue === option.value}
            onChange={handleChange.bind(null, option.value)}
            appearance="default"
            isFirstItem={index === 0}
            isLastItem={index === options.length - 1}
            disabled={disabled}
          />
        ))}
      </Box>
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
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
      ]).isRequired
    })
  ).isRequired,

  /**
   * The current value of the Segmented Control when controlled.
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),

  /**
   * The default value of the Segmented Control when uncontrolled.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),

  /**
   * Function called when the value changes.
   */
  onChange: PropTypes.func,

  /**
   * The name of the radio group.
   */
  name: PropTypes.string,

  /**
   * The height of the Segmented Control.
   */
  height: PropTypes.number,

  /**
   * When true, the Segmented Control is disabled.
   */
  disabled: PropTypes.bool
}

export default SegmentedControl
