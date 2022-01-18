import React from 'react'
import { Intent } from '../../constants'
import { TickCircleIcon, ErrorIcon, WarningSignIcon, InfoSignIcon } from '../../icons'

/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 */
export const getIconForIntent = (intent: any, props = {}) => {
  switch (intent) {
    case Intent.SUCCESS:
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      return <TickCircleIcon color="success" {...props} />
    case Intent.DANGER:
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      return <ErrorIcon color="danger" {...props} />
    case Intent.WARNING:
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      return <WarningSignIcon color="warning" {...props} />
    case Intent.NONE:
    default:
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
      return <InfoSignIcon color="info" {...props} />
  }
}
