import React from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import Pane, { PaneOwnProps } from './Pane'

export type CardProps<T extends React.ElementType<any> = 'div'> = PolymorphicBoxProps<T, CardOwnProps>
export type CardOwnProps = PaneOwnProps

const emptyObject = {}

const _Card = <T extends React.ElementType<any> = 'div'>(
  { className, ...props }: CardProps<T>,
  ref: ForwardedRef<T>
) => {
  const { className: themedClassName, ...styleProps } = useStyleConfig('Card', emptyObject, emptyObject, emptyObject)
  return <Pane className={cx(className, themedClassName)} {...styleProps} {...props} ref={ref} />
}

const Card = memoizeWithForwardedRef(_Card)

export default Card
