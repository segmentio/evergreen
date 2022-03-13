import React from 'react'
import { IconWrapperProps } from '../icons/src/IconWrapper'

export type IconComponent = React.FC<Omit<IconWrapperProps, 'icon'>>
