import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import SegmentedControlAppearances from '../styles/SegmentedControlAppearances'
import SegmentedControlRadio from './SegmentedControlRadio'

const keysSegmentedControlAppearances = Object.keys(SegmentedControlAppearances)
let radioCount = 1 // Used for generating unique input names

export default class SegmentedControl extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    appearance: PropTypes.oneOf(keysSegmentedControlAppearances),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    height: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    height: 32,
    appearance: 'default'
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
      appearance,
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
            name={name}
            label={option.label}
            value={option.value}
            height={height}
            checked={value === option.value}
            onChange={this.handleChange}
            appearance={appearance}
            isFirstItem={index === 0}
            isLastItem={index === options.length - 1}
          />
        ))}
      </Box>
    )
  }
}
