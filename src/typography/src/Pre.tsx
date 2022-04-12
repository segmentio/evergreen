import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import Text, { TextOwnProps } from './Text'

export type PreProps = PolymorphicBoxProps<'pre', PreOwnProps>;
export type PreOwnProps = TextOwnProps;

const Pre: React.FC<PreProps> = memo(
  forwardRef(function Pre(props, ref) {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '"pre"' is not assignable to type '"span" | u... Remove this comment to see the full error message
    return <Text is="pre" marginTop={0} marginBottom={0} {...props} ref={ref} />
  })
)

export default Pre
