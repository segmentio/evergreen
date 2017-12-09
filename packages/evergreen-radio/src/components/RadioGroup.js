import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from 'evergreen-layers'
import { Text } from 'evergreen-typography'
import Radio from './Radio'

export default class RadioGroup extends PureComponent {
  static propTypes = {
    ...Pane.propTypes,
    label: PropTypes.string,
    onChange: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.node,
        isDisabled: PropTypes.bool,
        isDefaultSelected: PropTypes.bool
      })
    ).isRequired
  }

  static defaultProps = {
    items: []
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      selected: (props.items.find(item => item.isDefaultSelected) || {}).value
    }
  }

  handleChange = value => {
    this.setState({
      selected: value
    })
    this.props.onChange(value)
  }

  render() {
    const { label, items, onChange, ...props } = this.props
    const { selected } = this.state

    return (
      <Pane role="group" aria-label={label} {...props}>
        {items.map(item => (
          <Radio
            key={item.value}
            name={item.name}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            disabled={item.isDisabled}
            onChange={() => this.handleChange(item.value)}
          />
        ))}
      </Pane>
    )
  }
}
