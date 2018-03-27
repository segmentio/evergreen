import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { spacing, position, layout, dimensions } from 'ui-box'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import Radio from './Radio'

let radioCount = 1 // Used for generating unique input names

export default class RadioGroup extends PureComponent {
  static propTypes = {
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

  static defaultProps = {
    options: [],
    onChange: () => {},
    size: 12,
    isRequired: false
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      value: props.defaultValue || props.options[0].value
    }

    this.name = `RadioGroup-${radioCount}`
    radioCount += 1
  }

  handleChange = value => {
    // Save a render cycle when it's a controlled input
    if (!this.props.value) {
      this.setState({ value })
    }

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    const {
      size,
      label,
      defaultValue,
      value,
      options,
      onChange,
      isRequired,
      ...props
    } = this.props

    // Allows it to behave like a controlled input
    const selected = value || this.state.value

    return (
      <Pane role="group" aria-label={label} {...props}>
        {label && (
          <Text
            size={size === 12 ? 200 : 300}
            color="extraMuted"
            fontWeight={500}
          >
            {label}
          </Text>
        )}
        {options.map(item => (
          <Radio
            key={item.value}
            size={size}
            name={this.name}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            disabled={item.isDisabled}
            onChange={() => this.handleChange(item.value)}
            isRequired={isRequired}
          />
        ))}
      </Pane>
    )
  }
}
