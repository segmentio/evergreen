import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../typography'

const FormFieldLabel = memo(
  forwardRef(function FormFieldLabel(props, ref) {
    const { children, isAstrixShown, ...rest } = props
    return (
      <Label display="block" {...rest} ref={ref}>
        {children}{' '}
        {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  })
)

FormFieldLabel.propTypes = {
  /**
   * Composes the Label component as the base.
   */
  ...Label.propTypes,

  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
}

export default FormFieldLabel
