import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { useStyleConfig } from '../../hooks'
import Pane from './Pane'

const emptyObject = {}

const Card = memo(
  forwardRef(function Card({ className, ...props }, ref) {
    const { className: themedClassName, ...styleProps } = useStyleConfig('Card', emptyObject, emptyObject, emptyObject)
    return <Pane className={cx(className, themedClassName)} {...styleProps} {...props} ref={ref} />
  })
)

Card.propTypes = {
  ...Pane.propTypes
}

export default Card
