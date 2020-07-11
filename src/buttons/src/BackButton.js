import React, { forwardRef, memo } from 'react'
import { ArrowLeftIcon } from '../../icons'
import Button from './Button'

const BackButton = memo(
  forwardRef(({ children = 'Back', ...props }, ref) => {
    return (
      <Button iconBefore={<ArrowLeftIcon />} {...props} ref={ref}>
        {children}
      </Button>
    )
  })
)

BackButton.propTypes = {
  /** Composes the Button component as the base. */
  ...Button.propTypes
}

export default BackButton
