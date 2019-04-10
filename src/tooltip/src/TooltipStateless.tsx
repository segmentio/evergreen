import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Pane } from '../../layers'
import { IPaneProps } from '../../layers/src/Pane'
import { Paragraph } from '../../typography'
import { withTheme, PropsWithTheme } from '../../theme'

export interface IStatelessTooltipProps extends Partial<IPaneProps> {
  children: any

  // The appearance of the tooltip.
  appearance: 'default' | 'card'
}

class TooltipStateless extends React.PureComponent<
  PropsWithTheme<IStatelessTooltipProps>
> {
  static propTypes = {
    children: PropTypes.node,
    appearance: PropTypes.oneOf(['default', 'card'])
      .isRequired as PropTypes.Validator<'default' | 'card'>,
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
