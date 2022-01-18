import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../typography'

const FormFieldLabel = memo(
  forwardRef(function FormFieldLabel(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { children, isAstrixShown, ...rest } = props
    return (
      <Label display="block" marginBottom={0} {...rest} ref={ref}>
        {children} {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
FormFieldLabel.propTypes = {
  /**
   * Composes the Label component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Label.propTypes,

  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
}

export default FormFieldLabel
