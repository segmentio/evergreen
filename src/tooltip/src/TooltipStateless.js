import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Paragraph } from '../../typography'
import { withTheme } from '../../theme'

export default withTheme(
  class TooltipStateless extends PureComponent {
    static propTypes = {
      children: PropTypes.node,

      /**
       * Theme provided by ThemeProvider.
       */
      theme: PropTypes.object.isRequired
    }

    render() {
      const { theme, children, ...props } = this.props
      let child
      if (typeof children === 'string') {
        child = (
          <Paragraph color="white" size={400}>
            {children}
          </Paragraph>
        )
      } else {
        child = children
      }

      return (
        <Box
          {...theme.getTooltipProps()}
          borderRadius={3}
          paddingX={8}
          paddingY={4}
          maxWidth={240}
          {...props}
        >
          {child}
        </Box>
      )
    }
  }
)
