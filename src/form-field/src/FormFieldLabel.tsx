import React from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import memoizeWithForwardedRef from '../../lib/memoize-with-forwarded-ref'
import { ForwardedRef } from '../../types/forwarded-ref'
import { Label } from '../../typography'
import { LabelOwnProps } from '../../typography/src/Label'

export interface FormFieldLabelOwnProps extends LabelOwnProps {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown?: boolean
}

export type FormFieldLabelProps<T extends React.ElementType<any> = 'label'> = PolymorphicBoxProps<
  T,
  FormFieldLabelOwnProps
>

const _FormFieldLabel = <T extends React.ElementType<any> = 'label'>(
  props: FormFieldLabelProps<T>,
  ref: ForwardedRef<T>
) => {
  const { children, isAstrixShown, ...rest } = props
  return (
    <Label display="block" marginBottom={0} {...rest} ref={ref}>
      {children} {isAstrixShown && <span title="This field is required.">*</span>}
    </Label>
  )
}

const FormFieldLabel = memoizeWithForwardedRef(_FormFieldLabel)

export default FormFieldLabel
