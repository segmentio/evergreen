import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import Badge, { BadgeOwnProps } from './Badge'

export type PillProps = PolymorphicBoxProps<'strong', PillOwnProps>;
export type PillOwnProps = BadgeOwnProps;

const Pill: React.FC<PillProps> = memo(
  forwardRef(function Pill(props, ref) {
    return <Badge borderRadius={999} ref={ref} {...props} />
  })
)

export default Pill
