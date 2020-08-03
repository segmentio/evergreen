import React, { memo, forwardRef } from 'react'
import Pane from './Pane'

const Card = memo(
  forwardRef(function Card(props, ref) {
    return <Pane borderRadius={5} {...props} ref={ref} />
  })
)

Card.propTypes = {
  ...Pane.propTypes
}

export default Card
