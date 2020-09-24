import React from 'react'
import { Pane } from '../../layers'
import { ThemeConsumer } from '../../theme'
import { Heading } from '../../typography'
import ColorGroup from './ColorGroup'
import Swatch from './Swatch'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const ColorViewer = props => {
  const { colorValue, name } = props

  if (typeof colorValue === 'string') {
    return (
      <Swatch
        color={colorValue}
        name={name}
        property={`theme.colors.${name}`}
      />
    )
  } else {
    return (
      <ColorGroup
        title={capitalize(name)}
        colorGroup={colorValue}
        name={childKey => `theme.colors.${name}.${childKey}`}
      />
    )
  }
}

const colorKeys = [
  {
    key: 'palette',
    name: 'Palette'
  },
  {
    key: 'colors',
    name: 'Function colors'
  },
  {
    key: 'scales',
    name: 'Scales'
  }
]

const ColorExamples = props => {
  return (
    <ThemeConsumer>
      {theme => (
        <Pane {...props}>
          {colorKeys.map(item => {
            if (!theme[item.key]) {
              return null
            } else {
              return (
                <Pane clearfix key={item.key} marginBottom={24}>
                  <Heading size={800}>{capitalize(item.name)}</Heading>
                  {Object.keys(theme[item.key]).map(key => {
                    return (
                      <ColorViewer
                        key={key}
                        name={key}
                        colorValue={theme[item.key][key]}
                      />
                    )
                  })}
                </Pane>
              )
            }
          })}
        </Pane>
      )}
    </ThemeConsumer>
  )
}

export default ColorExamples
