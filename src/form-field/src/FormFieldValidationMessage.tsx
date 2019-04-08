import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Icon } from '../../icon'
import { Pane } from '../../layers'
import { IPaneProps } from '../../layers/src/Pane'
import { PropsWithTheme, withTheme } from '../../theme'
import { Paragraph } from '../../typography'

interface IProps extends IPaneProps {
  // The contents of the validation message. This is wrapped in a paragraph, use a string.
  children: React.ReactNode
}

class FormFieldValidationMessage extends React.PureComponent<
  PropsWithTheme<IProps>
> {
  static propTypes = {
    ...Pane.propTypes,
    children: PropTypes.node,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { theme, children, ...props } = this.props
    return (
      <Pane display="flex" {...props}>
        <Icon
          icon="error"
          color="danger"
          marginTop={1}
          size={14}
          marginRight={8}
        />
        <Paragraph marginTop={0} size={300} color="danger" role="alert">
          {children}
        </Paragraph>
      </Pane>
    )
  }
}

export default withTheme(FormFieldValidationMessage)
