import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from "ui-box"
import { useStyleConfig } from '../../hooks'
import Text, { TextOwnProps } from './Text'

export interface LinkOwnProps extends TextOwnProps {
    /**
     * This attribute names a relationship of the linked document to the current document.
     * Common use case is: rel="noopener noreferrer".
     */
    rel?: string;
    /**
     * Specifies the URL of the linked resource. A URL might be absolute or relative.
     */
    href?: string;
    /**
     * Target atrribute, common use case is target="_blank."
     */
    target?: string;
    /**
     * The color (and styling) of the Link. Can be default, blue, green or neutral.
     */
    color?: string;
    /**
     * Class name passed to the link.
     */
    className?: string;
}

export type LinkProps = PolymorphicBoxProps<'a', LinkOwnProps>;

const internalStyles = {
  textDecoration: 'underline'
}

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus'
}

const Link: React.FC<LinkProps> = memo(
  forwardRef(function Link(props, ref) {
    const { className, color = 'default', ...restProps } = props
    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Link',
      { color },
      pseudoSelectors,
      internalStyles
    )

    // @ts-expect-error ts-migrate(2322) FIXME: Type '"a"' is not assignable to type '"span" | und... Remove this comment to see the full error message
    return <Text is="a" ref={ref} className={cx(className, themedClassName)} {...boxProps} {...restProps} />
  })
)

export default Link
