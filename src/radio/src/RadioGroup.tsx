import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { Pane } from '../../layers'
import { Text } from '../../typography'

import Radio from './Radio'

interface Options {
  label: React.ReactNode
  value: string
  isDisabled?: boolean
}

interface RadioGroupProps extends Partial<BoxProps> {
  // The options for the radios of the Radio Group.
  options?: Options[]

  // The selected item value when controlled.
  value?: string

  // The default value of the Radio Group when uncontrolled.
  defaultValue?: string

  // Function called when state changes.
  onChange?: (...args: any[]) => any

  // Label to display above the radio button options.
  label?: string

  // The size of the radio circle. This also informs the text size and spacing.
  size?: 12 | 16

  // When true, the radio get the required attribute.
  isRequired?: boolean
}

interface RadioGroupState {
  value: string
}

let radioCount = 1 // Used for generating unique input names

export default class RadioGroup extends React.PureComponent<
  RadioGroupProps,
  RadioGroupState
> {
  static propTypes = {
    ...Box.propTypes,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool
      })
    ).isRequired,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf([12, 16]).isRequired,
    isRequired: PropTypes.bool.isRequired
  }

  static defaultProps = {
    options: [] as Options[],
    onChange: () => {},
    size: 12 as 12 | 16,
    isRequired: false
  }

  name: string

  constructor(props: RadioGroupProps, context: any) {
    super(props, context)

    this.state = {
      value: props.defaultValue || props.options[0].value
    }

    this.name = `RadioGroup-${radioCount}`
    radioCount += 1
  }

  handleChange = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement

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
          <Text color="muted" fontWeight={500}>
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
            onChange={this.handleChange}
            isRequired={isRequired}
          />
        ))}
      </Pane>
    )
  }
}
