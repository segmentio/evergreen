import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading, Text, Code } from '../../typography'
import { Popover } from '../../popover'
import { ThemeConsumer } from '../../theme'

function uppercaseColor(color) {
  if (color[0] === '#') return color.toUpperCase()
  return color
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

class Swatch extends React.Component {
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

const ColorGroup = props => {
  return (
    <Pane marginTop={32} minWidth={160} float="left" marginRight={48}>
      <Pane borderBottom paddingBottom={8}>
        <Heading>{props.title}</Heading>
      </Pane>
      <Pane>
        {Object.keys(props.colorGroup).map(key => {
          return (
            <Swatch
              key={key}
              color={props.colorGroup[key]}
              name={key}
              property={props.name(key)}
            />
          )
        })}
      </Pane>
    </Pane>
  )
}

ColorGroup.propTypes = {
  title: PropTypes.node,
  colorGroup: PropTypes.object,
  name: PropTypes.func
}

storiesOf('colors', module)
  // This is hardcoded to the default theme.
  .add('overview', () => (
    <ThemeConsumer>
      {theme => (
        <Pane margin={48}>
          <Pane clearfix>
            <Heading size={800}>Palette</Heading>
            {Object.keys(theme.palette).map(key => {
              return (
                <ColorGroup
                  key={key}
                  title={capitalize(key)}
                  colorGroup={theme.palette[key]}
                  name={childKey => `theme.palette.${key}.${childKey}`}
                />
              )
            })}
          </Pane>
          <Pane clearfix>
            <Heading size={800} marginTop="default">
              Functional Colors
            </Heading>
            {Object.keys(theme.colors).map(key => {
              return (
                <ColorGroup
                  key={key}
                  title={capitalize(key)}
                  colorGroup={theme.colors[key]}
                  name={childKey => `theme.colors.${key}.${childKey}`}
                />
              )
            })}
          </Pane>
          <Pane clearfix>
            <Heading size={800} marginTop="default">
              Scales
            </Heading>
            {Object.keys(theme.scales).map(key => {
              return (
                <ColorGroup
                  key={key}
                  title={capitalize(key)}
                  colorGroup={theme.scales[key]}
                  name={childKey => `theme.scales.${key}.${childKey}`}
                />
              )
            })}
          </Pane>
        </Pane>
      )}
    </ThemeConsumer>
  ))
