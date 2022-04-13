import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Size } from '../../types'

export interface HeadingOwnProps {
  size?: Size
}

export type HeadingProps = PolymorphicBoxProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', HeadingOwnProps>

const pseudoSelectors = {}
const internalStyles = {}

const Heading: React.FC<HeadingProps> = memo(
  forwardRef(function Heading(props, ref) {
    const { className, size = 500, ...restProps } = props
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Heading',
      { size },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        is="h2"
        ref={ref}
        className={cx(themedClassName, className)}
        marginTop={0}
        marginBottom={0}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

export default Heading
