import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../../src/layers'
import { Text, Heading } from '../../../../src/typography'
import { ThemeConsumer } from '../../../../src/theme'
import Section from './Section'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

class Scale extends React.PureComponent {
  static propTypes = {
    scale: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { scale, name } = this.props
    return (
      <Pane float="left" marginRight={16} marginBottom={16}>
        <Heading marginBottom={8}>{capitalize(name)}</Heading>
        <Pane>
          {Object.keys(scale)
            .filter(colorKey => !colorKey.includes('A'))
            .map((colorKey, index) => {
              // TODO: get color contrast here.
              const textColor = index > 5 ? 'white' : null
              const color = scale[colorKey]
              return (
                <Pane
                  key={colorKey}
                  style={{ backgroundColor: color }}
                  width={200}
                  padding={6}
                  display="flex"
                >
                  <Text color={textColor} flex={1}>
                    {colorKey}
                  </Text>
                  <Text color={textColor}>{color}</Text>
                </Pane>
              )
            })}
        </Pane>
      </Pane>
    )
  }
}

export default class ScalesSection extends React.PureComponent {
  render() {
    return (
      <Section title="Color Scales" fileName="ScalesSection.js">
        <ThemeConsumer>
          {theme => {
            return Object.keys(theme.scales).map(scaleKey => {
              return (
                <Scale
                  key={scaleKey}
                  name={scaleKey}
                  scale={theme.scales[scaleKey]}
                />
              )
            })
          }}
        </ThemeConsumer>
      </Section>
    )
  }
}
