import React from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { Size } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'

export interface HeadingOwnProps {
  size?: Size
}

export type HeadingProps<T extends React.ElementType<any> = 'h2'> = PolymorphicBoxProps<T, HeadingOwnProps>

const pseudoSelectors = {}
const internalStyles = {}

const _Heading = <T extends React.ElementType<any> = 'h2'>(props: HeadingProps<T>, ref: ForwardedRef<T>) => {
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
}

const Heading = memoizeWithForwardedRef(_Heading)

export default Heading
