import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { withTheme, PropsWithTheme } from '../../theme'
import { AnyObject } from '../../types/helper'

export type Elevation = 0 | 1 | 2 | 3 | 4
type Border = boolean | 'muted' | 'default'
type BorderValues = boolean | 'muted' | 'extraMuted' | 'default'

type TBoolAndString = {
  border?: Border
  borderTop?: BorderValues
  borderBottom?: BorderValues
  borderLeft?: BorderValues
  borderRight?: BorderValues
}

type TOverrideBoxProps = Pick<
  BoxProps,
  Exclude<keyof BoxProps, keyof TBoolAndString>
>

export interface IPaneProps extends Partial<TOverrideBoxProps> {
  // Background property. `tint1`, `tint2` etc. from `theme.colors.background` are available.
  background?: string

  elevation?: Elevation
  hoverElevation?: Elevation
  activeElevation?: Elevation
}

class Pane extends React.PureComponent<PropsWithTheme<IPaneProps>> {
  static propTypes = {
    ...Box.propTypes,
    background: PropTypes.string,
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4]) as PropTypes.Validator<
      Elevation
    >,
    hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]) as PropTypes.Validator<
      Elevation
    >,
    activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]) as PropTypes.Validator<
      Elevation
    >,
    border: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]) as PropTypes.Validator<Border>,
    borderTop: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]) as PropTypes.Validator<BorderValues>,
    borderRight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]) as PropTypes.Validator<BorderValues>,
    borderBottom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]) as PropTypes.Validator<BorderValues>,
    borderLeft: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]) as PropTypes.Validator<BorderValues>,
    theme: PropTypes.object.isRequired
  }

  getHoverElevationStyle = (hoverElevation: Elevation, css: AnyObject) => {
    const { theme } = this.props
    if (!Number.isInteger(hoverElevation)) return {}

    return {
      transitionDuration: '150ms',
      transitionProperty: 'box-shadow, transform',
      transitionTimingFunction: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
      ':hover': {
        ...(css[':hover'] || {}),
        transform: 'translateY(-2px)',
        boxShadow: theme.getElevation(hoverElevation)
      }
    }
  }

  getActiveElevationStyle = (activeElevation: Elevation, css: AnyObject) => {
    const { theme } = this.props
    if (!Number.isInteger(activeElevation)) return {}

    return {
      ':active': {
        ...(css[':active'] || {}),
        transform: 'translateY(-1px)',
        boxShadow: theme.getElevation(activeElevation)
      }
    }
  }

  getBorderSideProperty = ({
    borderSideProperty,
    border
  }: {
    borderSideProperty: string | boolean
    border: string | boolean
  }) => {
    const { theme } = this.props
    if (
      typeof borderSideProperty === 'string' &&
      Object.prototype.hasOwnProperty.call(
        theme.colors.border,
        borderSideProperty
      )
    ) {
      return `1px solid ${theme.colors.border[borderSideProperty]}`
    }

    if (borderSideProperty === true) {
      return `1px solid ${theme.colors.border.default}`
    }

    if (borderSideProperty === false) {
      return null
    }

    if (
      typeof border === 'string' &&
      Object.prototype.hasOwnProperty.call(theme.colors.border, border)
    ) {
      return `1px solid ${theme.colors.border[border]}`
    }

    if (border === true) {
      return `1px solid ${theme.colors.border.default}`
    }

    return borderSideProperty
  }

  render() {
    const {
      theme,

      background,

      elevation,
      hoverElevation,
      activeElevation,

      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,

      css = {},
      ...props
    } = this.props

    const elevationStyle = theme.getElevation(elevation)
    const hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css)
    const activeElevationStyle = this.getActiveElevationStyle(
      activeElevation,
      css
    )

    const [_borderTop, _borderRight, _borderBottom, _borderLeft] = [
      borderTop,
      borderRight,
      borderBottom,
      borderLeft
    ].map(borderSideProperty =>
      this.getBorderSideProperty({ borderSideProperty, border })
    )

    return (
      <Box
        borderTop={_borderTop}
        borderRight={_borderRight}
        borderBottom={_borderBottom}
        borderLeft={_borderLeft}
        boxShadow={elevationStyle}
        background={theme.getBackground(background)}
        css={{
          ...css,
          ...hoverElevationStyle,
          ...activeElevationStyle
        }}
        {...props}
      />
    )
  }
}

export default withTheme(Pane)
