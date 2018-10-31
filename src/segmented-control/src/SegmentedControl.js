import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { spacing, position, layout, dimensions } from 'ui-box'
import safeInvoke from '../../lib/safe-invoke'
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
    height: PropTypes.number
  }

  static defaultProps = {
    height: 32
  }

  constructor(props, context) {
    super(props, context)

    let value = props.defaultValue
    if (typeof value === 'undefined' || value === null) {
      value = props.options[0].value
    }

    this.state = {
      value
    }

    this.name = `SegmentedControl-${radioCount}`
    radioCount += 1
  }

  isControlled = () => {
    return typeof this.props.value !== 'undefined' && this.props.value !== null
  }

  handleChange = value => {
    // Save a render cycle when it's a controlled input
    if (!this.isControlled()) {
      this.setState({ value })
    }

    safeInvoke(this.props.onChange, value)
  }

  render() {
    const {
      value: filterOutValue, // Filter out.
      name,
      height,
      options,
      onChange,
      defaultValue,
      ...props
    } = this.props

    // Allows it to behave like a controlled input
    let { value } = this.state
    if (this.isControlled()) {
      value = this.props.value
    }

    return (
      <Box display="flex" marginRight={-1} height={height} {...props}>
        {options.map((option, index) => (
          <SegmentedControlRadio
            key={option.value}
            id={this.name + index}
            name={name || this.name}
            label={option.label}
            value={String(option.value)}
            height={height}
            checked={value === option.value}
            onChange={this.handleChange.bind(null, option.value)}
            appearance="default"
            isFirstItem={index === 0}
            isLastItem={index === options.length - 1}
          />
        ))}
      </Box>
    )
  }
}
