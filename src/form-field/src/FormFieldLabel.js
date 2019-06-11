import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../typography'

export default class FormFieldLabel extends PureComponent {
  static propTypes = {
    /**
     * Composes the Label component as the base.
     */
    ...Label.propTypes,

    /**
     * Whether or not to show an asterix after the label.
     */
    isAstrixShown: PropTypes.bool
  }

  render() {
    const { children, isAstrixShown, ...props } = this.props
    return (
      <Label display="block" {...props}>
        {children}{' '}
        {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  }
}
