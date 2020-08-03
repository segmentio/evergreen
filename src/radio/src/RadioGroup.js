import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import { useId } from '../../hooks'
import Radio from './Radio'

const noop = () => {}
const emptyArray = []

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
      ...rest
    } = props

    const name = useId('RadioGroup')
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
            onChange={onChange}
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
