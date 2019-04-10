import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import safeInvoke from '../../lib/safe-invoke'
import SegmentedControlRadio from './SegmentedControlRadio'

type TOptions = {
  label: string
  value: number | string | boolean
}

interface IProps extends Partial<BoxProps> {
  // The options for the radios of the Segmented Control.
  options: TOptions[]

  // The current value of the Segmented Control when controlled.
  value?: number | string | boolean

  // The default value of the Segmented Control when uncontrolled.
  defaultValue?: number | string | boolean

  // Function called when the value changes.
  onChange?: (...args: any[]) => any

  // The name of the radio group.
  name?: string

  // The height of the Segmented Control.
  height?: number
}

interface IState {
  value: number | string | boolean
}

let radioCount = 1 // Used for generating unique input names

export default class SegmentedControl extends React.PureComponent<
  IProps,
  IState
> {
  static propTypes = {
    ...Box.propTypes,
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
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    height: PropTypes.number
  }

  static defaultProps = {
    height: 32
  }

  name: string

  constructor(props: IProps, context: any) {
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

  handleChange = (value: string | number | boolean) => {
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
            key={
              typeof option.value !== 'boolean' ? option.value : option.label
            }
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
