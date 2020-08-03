import React from 'react'
import { Intent } from '../../constants'
import {
  TickCircleIcon,
  ErrorIcon,
  WarningSignIcon,
  InfoSignIcon
} from '../../icons'

/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 */
export const getIconForIntent = (intent, props = {}) => {
  switch (intent) {
    case Intent.SUCCESS:
      return <TickCircleIcon color="success" {...props} />
    case Intent.DANGER:
      return <ErrorIcon color="danger" {...props} />
    case Intent.WARNING:
      return <WarningSignIcon color="warning" {...props} />
    case Intent.NONE:
    default:
      return <InfoSignIcon color="info" {...props} />
  }
}
