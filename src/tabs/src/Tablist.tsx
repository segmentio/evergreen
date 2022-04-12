import React, { forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'

export interface TablistOwnProps {
}

export type TablistProps = PolymorphicBoxProps<'div', TablistOwnProps>;

const Tablist: React.FC<TablistProps> = forwardRef(function Tablist(props, ref) {
  return <Box role="tablist" {...props} ref={ref} />
})

export default Tablist
