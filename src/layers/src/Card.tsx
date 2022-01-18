import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { useStyleConfig } from '../../hooks'
import Pane from './Pane'

const emptyObject = {}

const Card = memo(
  // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
  forwardRef(function Card({ className, ...props }, ref) {
    const { className: themedClassName, ...styleProps } = useStyleConfig('Card', emptyObject, emptyObject, emptyObject)
    return <Pane className={cx(className, themedClassName)} {...styleProps} {...props} ref={ref} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Card.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Pane.propTypes
}

export default Card
