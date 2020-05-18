import React, { memo, forwardRef } from 'react'
import Pane from './Pane'

const Card = memo(
  forwardRef((props, ref) => {
    return <Pane borderRadius={5} {...props} ref={ref} />
  })
)

Card.propTypes = {
  ...Pane.propTypes
}

export default Card
