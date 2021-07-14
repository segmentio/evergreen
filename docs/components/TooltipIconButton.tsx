import React from 'react'
import { IconButton, IconButtonProps, Tooltip } from 'evergreen-ui'

interface Props extends IconButtonProps {
  content: string
}

const TooltipIconButton: React.FC<Props> = ({ content, ...rest }) => {
  return (
    <Tooltip content={content}>
      <IconButton {...rest} />
    </Tooltip>
  )
}

export default TooltipIconButton
