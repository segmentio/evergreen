import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { ForwardedRef } from '../../types/forwarded-ref'
import Text, { TextOwnProps } from './Text'

export interface LinkOwnProps extends TextOwnProps {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel?: string
  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href?: string
  /**
   * Target attribute, common use case is target="_blank."
   */
  target?: string
  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color?: string
  /**
   * Class name passed to the link.
   */
  className?: string
}

export type LinkProps<T extends React.ElementType<any> = 'a'> = PolymorphicBoxProps<T, LinkOwnProps>

const internalStyles = {
  textDecoration: 'underline',
}

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
}

const Link = <T extends React.ElementType<any> = 'a'>(props: LinkProps<T>, ref: ForwardedRef<T>) => {
  const { className, color = 'default', ...restProps } = props
  const { className: themedClassName, ...boxProps } = useStyleConfig('Link', { color }, pseudoSelectors, internalStyles)

  return <Text is="a" ref={ref} className={cx(className, themedClassName)} {...boxProps} {...restProps} />
}

export default memo(forwardRef(Link))
