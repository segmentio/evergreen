import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { BoxPropValue } from 'ui-box/dist/src/types/enhancers'
import { useStyleConfig } from '../../hooks'
import { Elevation } from '../../types'
import { ForwardedRef } from '../../types/forwarded-ref'

export interface PaneOwnProps {
  background?: string | BoxPropValue
  border?: boolean | string | BoxPropValue
  borderTop?: boolean | string | BoxPropValue
  borderRight?: boolean | string | BoxPropValue
  borderBottom?: boolean | string | BoxPropValue
  borderLeft?: boolean | string | BoxPropValue
  elevation?: Elevation
  hoverElevation?: Elevation
  activeElevation?: Elevation
}

export type PaneProps<T extends React.ElementType<any> = 'div'> = PolymorphicBoxProps<T, PaneOwnProps>

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
}

const internalStyles = {}

const Pane = <T extends React.ElementType<any> = 'div'>(props: PaneProps<T>, ref: ForwardedRef<T>) => {
  const {
    activeElevation,

    // Pulled out of props because we'll get them from the style hook
    background,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    className,
    elevation,
    hoverElevation,

    ...restProps
  } = props

  const { className: themedClassName, ...styleProps } = useStyleConfig(
    'Pane',
    {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ elevation: Elevation | undefin... Remove this comment to see the full error message
      elevation,
      hoverElevation,
      activeElevation,
      background,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
    },
    pseudoSelectors,
    internalStyles
  )

  return <Box ref={ref} className={cx(className, themedClassName)} {...styleProps} {...restProps} />
}

export default memo(forwardRef(Pane))
