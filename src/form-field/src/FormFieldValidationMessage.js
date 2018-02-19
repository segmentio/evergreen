import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'
import { colors } from '../../colors'

export default class FormFieldValidationMessage extends PureComponent {
  static propTypes = {
    /**
     * Composes the Paragraph component as the base.
     */
    ...Paragraph.propTypes
  }

  render() {
    return (
      <Paragraph
        marginTop={0}
        size={300}
        color={colors.red['700']}
        {...this.props}
        role="alert"
      />
    )
  }
}
