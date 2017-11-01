import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Positioner from 'evergreen-positioner'
import TooltipStateless from './TooltipStateless'

export default class TooltipContent extends PureComponent {
  static propTypes = {
    ...Positioner.propTypes,
    children: PropTypes.node,
    tooltipProps: PropTypes.object,
  }

  static defaultProps = {
    ...Positioner.defaultProps,
  }

  render() {
    const { children, tooltipProps, ...props } = this.props

    return (
      <Positioner {...props}>
        {({ css, style, state, getRef }) => (
          <TooltipStateless
            innerRef={ref => getRef(ref)}
            data-state={state}
            css={css}
            style={style}
            {...tooltipProps}
          >
            {children}
          </TooltipStateless>
        )}
      </Positioner>
    )
  }
}
