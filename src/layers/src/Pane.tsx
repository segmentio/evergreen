import React, { memo, forwardRef, ForwardedRef } from 'react'
import PropTypes from 'prop-types'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'

export interface PaneOwnProps {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors` are available.
   */
  background?: string

  /**
   * Can be an explicit border value or a boolean.
   */
  border?: boolean | string

  /**
   * Can be an explicit border value or a boolean.
   */
  borderTop?: boolean | string

  /**
   * Can be an explicit border value or a boolean.
   */
  borderRight?: boolean | string

  /**
   * Can be an explicit border value or a boolean.
   */
  borderBottom?: boolean | string

  /**
   * Can be an explicit border value or a boolean.
   */
  borderLeft?: boolean | string

  /**
   * Elevation of the Pane.
   */
  elevation?: Elevation

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   */
  hoverElevation?: Elevation

  /**
   * Elevation of the Pane on click. Might get deprecated.
   */
  activeElevation?: Elevation
}

export type PaneProps<T extends React.ElementType = 'div'> = PolymorphicBoxProps<T, PaneOwnProps>

// Temporary type alias to satisfy TS, may be extracted to a shared types directory later
type Elevation = 0 | 1 | 2 | 3 | 4

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active'
}

const internalStyles = {}

const _Pane = <T extends React.ElementType = 'div'>(props: PaneProps<T>, ref: ForwardedRef<T>) => {
  const {
    // Pulled out of props because we'll get them from the style hook
    activeElevation,
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

  const themedProps = useStyleConfig(
    'Pane',
    {
      // @ts-expect-error TS(2345): Argument of type '{ elevation: Elevation | undefin... Remove this comment to see the full error message
      elevation,
      hoverElevation,
      activeElevation,
      background,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      className
    },
    pseudoSelectors,
    internalStyles
  )

  // @ts-expect-error TS(2322): Type '{ selectors: SelectorMap | undefined; style:... Remove this comment to see the full error message
  return <Box ref={ref} className={className} {...themedProps} {...restProps} />
}

const Pane = memo(forwardRef(_Pane)) as <T extends React.ElementType = 'div'>(props: PaneProps<T>) => JSX.Element

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
Pane.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  // @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,

  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be an explicit border value or a boolean.
   */
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * Can be an explicit border value or a boolean.
   */
  borderTop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * Can be an explicit border value or a boolean.
   */
  borderRight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * Can be an explicit border value or a boolean.
   */
  borderBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * Can be an explicit border value or a boolean.
   */
  borderLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default Pane
