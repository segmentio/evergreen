import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout, dimensions } from 'ui-box'
import SegmentedControlRadio from './SegmentedControlRadio'

let radioCount = 1 // Used for generating unique input names

export default class SegmentedControl extends PureComponent {
  static propTypes = {
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
        value: PropTypes.string.isRequired
      })
    ).isRequired,

    /**
     * The current value of the Segmented Control when controlled.
     */
    value: PropTypes.string,

    /**
     * The default value of the Segmented Control when uncontrolled.
     */
    defaultValue: PropTypes.string,

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
    height: PropTypes.number
  }

  static defaultProps = {
    height: 32
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      value: props.defaultValue || props.options[0].value
    }

    this.name = `SegmentedControl-${radioCount}`
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
      name,
      height,
      options,
      onChange,
      defaultValue,
      ...props
    } = this.props

    // Allows it to behave like a controlled input
    const value = this.props.value || this.state.value
    return (
      <Box display="flex" marginRight={-1} height={height} {...props}>
        {options.map((option, index) => (
          <SegmentedControlRadio
            key={option.value}
            name={name || this.name}
            id={this.name + index}
            label={option.label}
            value={option.value}
            height={height}
            checked={value === option.value}
            onChange={this.handleChange}
            appearance="default"
            isFirstItem={index === 0}
            isLastItem={index === options.length - 1}
          />
        ))}
      </Box>
    )
  }
}
