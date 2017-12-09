import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import colors from '../src/colors'

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

class Swatch extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    colorGroupName: PropTypes.string.isRequired,
    swatchKey: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { colorGroupName, swatchKey, color, name } = this.props
    return (
      <Box
        key={name}
        style={{ backgroundColor: color }}
        fontSize={12}
        marginBottom={4}
        padding={12}
      >
        {name}
        <br />
        {color}
        <br />
        colors.{colorGroupName}[&apos;{swatchKey}&apos;]
      </Box>
    )
  }
}

storiesOf('colors', module).add('overview', () => (
  <Box fontFamily={fontFamily}>
    <Box marginBottom={24}>
      <Box>Colors</Box>
      <Box fontSize={12}>Colors ending in `A` have a alpha channel</Box>
    </Box>
    {Object.keys(colors).map(key => (
      <Box key={key} width={180} float="left" marginRight={8} marginBottom={20}>
        {key}
        {Object.keys(colors[key]).map(swatchKey => (
          <Swatch
            key={swatchKey}
            color={colors[key][swatchKey]}
            name={`${key} ${swatchKey}`}
            colorGroupName={key}
            swatchKey={swatchKey}
          />
        ))}
      </Box>
    ))}
  </Box>
))
