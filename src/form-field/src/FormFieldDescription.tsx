import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import { Paragraph } from '../../typography'
import { ParagraphOwnProps } from "../../typography/src/Paragraph";

export interface FormFieldDescriptionOwnProps extends ParagraphOwnProps {
}

export type FormFieldDescriptionProps = PolymorphicBoxProps<'p', FormFieldDescriptionOwnProps>;

const FormFieldDescription: React.FC<FormFieldDescriptionProps> = memo(
  forwardRef(function FormFieldDescription(props, ref) {
    return <Paragraph marginTop={4} marginBottom={0} size={300} color="muted" {...props} ref={ref} />
  })
)

export default FormFieldDescription
