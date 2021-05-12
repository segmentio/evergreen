import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import Swatch from './Swatch'

const ColorGroup = props => {
  if (typeof props.colorGroup === 'string') {
    return <Swatch key={props.title} color={props.colorGroup} name={props.title} property={props.name(props.title)} />
  }

  return (
    <Pane marginTop={32} minWidth={160}>
      <Pane borderBottom paddingBottom={8}>
        <Heading>{props.title}</Heading>
      </Pane>
      <Pane>
        {Object.keys(props.colorGroup).map(key => {
          return <Swatch key={key} color={props.colorGroup[key]} name={key} property={props.name(key)} />
        })}
      </Pane>
    </Pane>
  )
}

ColorGroup.propTypes = {
  title: PropTypes.node,
  colorGroup: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.func
}

export default ColorGroup
