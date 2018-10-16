import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading, Text, Code } from '../../typography'
import { Popover } from '../../popover'

function uppercaseColor(color) {
  if (color[0] === '#') return color.toUpperCase()
  return color
}

export default class Swatch extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    property: PropTypes.string.isRequired
  }

  renderContent = () => {
    const { color, name, property } = this.props

    return (
      <Pane padding={24}>
        <Heading size={600}>
          {name}: {color}
        </Heading>
        <Pane marginTop={12}>
          <Code>{property}</Code>
        </Pane>
      </Pane>
    )
  }

  render() {
    const { color, name, property, ...props } = this.props
    return (
      <Pane
        display="flex"
        paddingY={16}
        alignItems="center"
        borderBottom="muted"
        {...props}
      >
        <Popover content={this.renderContent}>
          <Pane
            style={{ backgroundColor: color }}
            cursor="pointer"
            flexShrink={0}
            boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
            borderRadius={3}
            width={40}
            height={40}
          />
        </Popover>
        <Pane paddingLeft={12} flex={1}>
          <Heading size={400}>{name}</Heading>
          <Text color="muted">{uppercaseColor(color)}</Text>
        </Pane>
      </Pane>
    )
  }
}
