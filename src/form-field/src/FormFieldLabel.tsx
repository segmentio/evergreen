import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { Label } from '../../typography'
import { LabelOwnProps } from '../../typography/src/Label'

export interface FormFieldLabelOwnProps extends LabelOwnProps {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown?: boolean
}

export type FormFieldLabelProps = PolymorphicBoxProps<'label', FormFieldLabelOwnProps>

const FormFieldLabel: React.FC<FormFieldLabelProps> = memo(
  forwardRef(function FormFieldLabel(props, ref) {
    const { children, isAstrixShown, ...rest } = props
    return (
      <Label display="block" marginBottom={0} {...rest} ref={ref}>
        {children} {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  })
)

export default FormFieldLabel
