import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import { Paragraph } from '../../typography'
import { ParagraphOwnProps } from "../../typography/src/Paragraph";

export interface FormFieldHintOwnProps extends ParagraphOwnProps {
}

export type FormFieldHintProps = PolymorphicBoxProps<'p', FormFieldHintOwnProps>;

const FormFieldHint: React.FC<FormFieldHintProps> = memo(
  forwardRef(function FormFieldHint(props, ref) {
    return <Paragraph marginTop={0} size={300} color="muted" {...props} ref={ref} />
  })
)

export default FormFieldHint
