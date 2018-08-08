import React from 'react'
import PropTypes from 'prop-types'
import { ChromePicker } from 'react-color'
import { Pane } from '../../../src/layers'
import { Popover } from '../../../src/popover'
import { Text } from '../../../src/typography'

export default class ColorPicker extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChangeComplete: PropTypes.func.isRequired
  }

  renderContent = () => {
    return (
      <ChromePicker
        color={this.props.color}
        onChangeComplete={color => this.props.onChangeComplete(color.hex)}
      />
    )
  }

  render() {
    return (
      <Popover content={this.renderContent}>
        <Pane
          background="white"
          display="flex"
          alignItems="center"
          cursor="pointer"
          borderBottom
          padding={12}
        >
          <Pane
            style={{ backgroundColor: this.props.color }}
            width={16}
            height={16}
            borderRadius={3}
          />
          <Text marginLeft={8}>{this.props.label}</Text>
        </Pane>
      </Popover>
    )
  }
}
