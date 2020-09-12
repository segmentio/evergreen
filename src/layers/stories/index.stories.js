import React from 'react'
import { storiesOf } from '@storybook/react'
import { Pane, Card } from '..'
import { ThemeConsumer } from '../../theme'

const cardStyle = {
  float: 'left',
  margin: 32,
  width: 160,
  height: 104,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

storiesOf('layers', module)
  .add('Pane', () => (
    <ThemeConsumer>
      {theme => (
        <div>
          <Pane overflow="auto">
            {theme.shadows.map((style, index) => (
              <Pane key={style} {...cardStyle} elevation={index}>
                Elevation {index}
              </Pane>
            ))}
            {Object.keys(theme.colors)
              .filter(c => typeof theme.colors[c] === 'string')
              .map(background => (
                <Pane key={background} {...cardStyle} background={background}>
                  Background: {background}
                </Pane>
              ))}
          </Pane>
          <Pane overflow="auto">
            <Pane
              {...cardStyle}
              elevation={1}
              hoverElevation={3}
              activeElevation={2}
            >
              Interactive
            </Pane>
          </Pane>
          {Object.keys(theme.colors.border).map(borderColor => (
            <Pane key={borderColor} overflow="auto">
              <Pane {...cardStyle} borderTop={borderColor}>
                borderTop: {borderColor}
              </Pane>
              <Pane {...cardStyle} borderRight={borderColor}>
                borderRight: {borderColor}
              </Pane>
              <Pane {...cardStyle} borderBottom={borderColor}>
                borderBottom: {borderColor}
              </Pane>
              <Pane {...cardStyle} borderLeft={borderColor}>
                borderLeft: {borderColor}
              </Pane>
            </Pane>
          ))}
        </div>
      )}
    </ThemeConsumer>
  ))
  .add('Card', () => (
    <ThemeConsumer>
      {theme => (
        <div>
          <Pane overflow="auto">
            {theme.shadows.map((style, index) => (
              <Card key={style} {...cardStyle} elevation={index}>
                Elevation {index}
              </Card>
            ))}

            {Object.keys(theme.colors)
              .filter(c => typeof theme.colors[c] === 'string')
              .map(background => (
                <Card key={background} {...cardStyle} background={background}>
                  Background: {background}
                </Card>
              ))}
          </Pane>

          <Pane overflow="auto">
            <Card
              {...cardStyle}
              elevation={1}
              hoverElevation={3}
              activeElevation={2}
            >
              Interactive
            </Card>
          </Pane>
        </div>
      )}
    </ThemeConsumer>
  ))
