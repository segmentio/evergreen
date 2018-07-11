import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from '../../typography'
import { withTheme } from '../../theme'
import { Icon } from '../../icon'
import { Pane } from '../../layers'

class FormFieldValidationMessage extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes,

    /**
     * The contents of the validation message.
     * This is wrapped in a paragraph, use a string.
     */
    children: PropTypes.node,

    /**
     * Theme provided by ThemeProvider.
     */
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
