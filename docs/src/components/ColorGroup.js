import React from 'react'
import PropTypes from 'prop-types'
import { Pane, Heading } from 'evergreen-ui'
import Swatch from './Swatch'

const ColorGroup = ({ title, colorGroup, name }) => {
  return (
    <Pane marginTop={32} minWidth={160}>
      <Pane borderBottom paddingBottom={8}>
        <Heading>{title}</Heading>
      </Pane>
      <Pane>
        {Object.keys(colorGroup).map(key => (
          <Swatch
            key={key}
            color={colorGroup[key]}
            name={key}
            property={name(key)}
          />
        ))}
      </Pane>
    </Pane>
  )
}

ColorGroup.propTypes = {
  title: PropTypes.node,
  colorGroup: PropTypes.object,
  name: PropTypes.func
}

export default ColorGroup
