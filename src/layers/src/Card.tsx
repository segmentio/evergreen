import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import Pane, { PaneOwnProps } from './Pane'

export type CardProps<T extends React.ElementType<any> = 'div'> = PolymorphicBoxProps<T, CardOwnProps>
export type CardOwnProps = PaneOwnProps

const emptyObject = {}

function Card<T extends React.ElementType<any> = 'div'>(
  { className, ...props }: CardProps<T>,
  ref: React.Ref<JSX.LibraryManagedAttributes<T, React.ComponentPropsWithRef<T>>>
) {
  const { className: themedClassName, ...styleProps } = useStyleConfig('Card', emptyObject, emptyObject, emptyObject)
  return <Pane className={cx(className, themedClassName)} {...styleProps} {...props} ref={ref} />
}

export default memo(forwardRef(Card))
