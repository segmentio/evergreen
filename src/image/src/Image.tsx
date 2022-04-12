import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'

export interface ImageOwnProps {
    src?: string;
}

export type ImageProps = PolymorphicBoxProps<'img', ImageOwnProps>;

const Image: React.FC<ImageProps> = memo(
  forwardRef(function Image(props, ref) {
    return <Box is="img" {...props} ref={ref} />
  })
)

export default Image
