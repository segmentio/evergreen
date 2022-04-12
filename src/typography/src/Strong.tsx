import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import Text, { TextOwnProps } from './Text'

export type StrongProps = PolymorphicBoxProps<'strong', StrongOwnProps>;
export type StrongOwnProps = TextOwnProps;

const Strong: React.FC<StrongProps> = memo(
  forwardRef(function Strong(props, ref) {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '"strong"' is not assignable to type '"span" ... Remove this comment to see the full error message
    return <Text is="strong" fontWeight={600} {...props} ref={ref} />
  })
)

export default Strong
