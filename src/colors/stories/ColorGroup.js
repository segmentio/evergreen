import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import Swatch from './Swatch'

const ColorGroup = props => {
  const colorGroup = typeof props.colorGroup === 'object' ? props.colorGroup : { [props.title]: props.colorGroup }
  return (
    <Pane marginTop={32} minWidth={160}>
      <Pane borderBottom paddingBottom={8}>
        <Heading>{props.title}</Heading>
      </Pane>
      <Pane>
        {Object.keys(colorGroup).map(key => {
          return (
            <Swatch
              key={key}
              color={colorGroup[key]}
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

export default ColorGroup
