import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  Pane,
  Card,
  ElevationStyles,
  LayerAppearances,
  BorderColors,
} from '../src/'

const cardStyle = {
  float: 'left',
  margin: 32,
  width: 160,
  height: 104,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

storiesOf('layers', module)
  .add('Pane', () =>
    <div>
      <Pane overflow="auto">
        {ElevationStyles.map((_, index) =>
          <Pane {...cardStyle} elevation={index}>
            Elevation {index}
          </Pane>,
        )}
        {Object.keys(LayerAppearances).map(appearance =>
          <Pane {...cardStyle} appearance={appearance}>
            Appearance: {appearance}
          </Pane>,
        )}
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

      {Object.keys(BorderColors).map(borderColor =>
        <Pane overflow="auto" key={borderColor}>
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
        </Pane>,
      )}
    </div>,
  )
  .add('Card', () =>
    <div>
      <Pane overflow="auto">
        {ElevationStyles.map((_, index) =>
          <Card {...cardStyle} elevation={index}>
            Elevation {index}
          </Card>,
        )}

        {Object.keys(LayerAppearances).map(appearance =>
          <Card {...cardStyle} appearance={appearance}>
            Appearance: {appearance}
          </Card>,
        )}
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
    </div>,
  )
