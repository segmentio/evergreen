import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Label } from 'evergreen-typography'

export default class FormFieldLabel extends PureComponent {
  static propTypes = {
    /**
     * Composes the Label component as the base.
     */
    ...Label.propTypes,

    /**
     * Wether or not tho show an asterix after the label.
     */
    isAstrixShown: PropTypes.bool
  }

  static defaultProps = {
    display: 'block'
  }

  render() {
    const { children, isAstrixShown, ...props } = this.props
    return (
      <Label {...props}>
        {children}{' '}
        {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  }
}
