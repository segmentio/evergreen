import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'
import { withTheme } from '../../theme'

class TooltipStateless extends PureComponent {
  static propTypes = {
    children: PropTypes.node,

    /**
     * The appearance of the tooltip.
     */
    appearance: PropTypes.oneOf(['default', 'card']).isRequired,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  render() {
    const { theme, children, appearance, ...props } = this.props
    const { color, ...themedProps } = theme.getTooltipProps(appearance)

    let child
    if (typeof children === 'string') {
      child = (
        <Paragraph color={color} size={400}>
          {children}
        </Paragraph>
      )
    } else {
      child = children
    }

    return (
      <Pane
        borderRadius={3}
        paddingX={8}
        paddingY={4}
        maxWidth={240}
        {...themedProps}
        {...props}
      >
        {child}
      </Pane>
    )
  }
}

export default withTheme(TooltipStateless)
