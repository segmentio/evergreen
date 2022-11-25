import React, { memo, forwardRef } from 'react'
import { useStyleConfig } from '../../hooks'
import Pane from './Pane'

const emptyObject = {}

const Card = memo(
  forwardRef(function Card({ className, ...props }, ref) {
    const themedProps = useStyleConfig('Card', emptyObject, emptyObject, emptyObject)
    return <Pane className={className} {...themedProps} {...props} ref={ref} />
  })
)

Card.propTypes = {
  ...Pane.propTypes
}

export default Card
