import React, { memo, forwardRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import Radio from './Radio'

let radioCount = 1 // Used for generating unique input names

const RadioGroup = memo(
  forwardRef((props, ref) => {
    const {
      size,
      label,
      defaultValue,
      value,
      options,
      onChange,
      isRequired,
      ...rest
    } = props

    const [name] = useState(`RadioGroup-${radioCount++}`)

    const handleChange = useCallback(
      e => {
        onChange(e.target.value)
      },
      [onChange]
    )

    const selected = value || defaultValue || props.options[0].value

    return (
      <Pane role="group" aria-label={label} {...rest} ref={ref}>
        {label && (
          <Text color="muted" fontWeight={500}>
            {label}
          </Text>
        )}
        {options.map(item => (
          <Radio
            key={item.value}
            size={size}
            name={name}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            disabled={item.isDisabled}
            onChange={handleChange}
            isRequired={isRequired}
          />
        ))}
      </Pane>
    )
  })
)

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
  onChange: PropTypes.func.isRequired,

  /**
   * Label to display above the radio button options.
   */
  label: PropTypes.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]).isRequired,

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool.isRequired
}

RadioGroup.defaultProps = {
  options: [],
  onChange: () => {},
  size: 12,
  isRequired: false
}

export default RadioGroup
