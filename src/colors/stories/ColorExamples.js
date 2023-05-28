import React from 'react'
import { Pane } from '../../layers'
import { ThemeConsumer } from '../../theme'
import { Heading } from '../../typography'
import ColorGroup from './ColorGroup'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const colorKeys = [
  {
    key: 'palette',
    name: 'Palette'
  },
  {
    key: 'colors',
    name: 'Functional colors'
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
            }

            return (
              <Pane clearfix key={item.key} marginTop={32}>
                <Heading size={800}>{item.name}</Heading>
                {Object.keys(theme[item.key]).map(key => {
                  return (
                    <ColorGroup
                      key={key}
                      title={capitalize(key)}
                      colorGroup={theme[item.key][key]}
                      name={childKey => {
                        if (childKey.toLowerCase() === key.toLowerCase()) {
                          return `theme.${item.key}.${key}`
                        }

                        return `theme.${item.key}.${key}.${childKey}`
                      }}
                    />
                  )
                })}
              </Pane>
            )
          })}
        </Pane>
      )}
    </ThemeConsumer>
  )
}

export default ColorExamples
