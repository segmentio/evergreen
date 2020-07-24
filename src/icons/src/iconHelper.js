import React from 'react'
import { Icon } from '../../icon'

export default (iconProp, props) => {
  if (!iconProp) return null

  if (React.isValidElement(iconProp)) {
    return React.cloneElement(iconProp, {
      ...props,
      ...iconProp.props
    })
  }

  return (
    <Icon icon={iconProp} {...props} />
  )
}