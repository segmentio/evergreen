import { css } from 'glamor'
import Box from 'ui-box'
import scales from '../foundational-styles/scales'
import colors from '../foundational-styles/colors'

type Colors = typeof colors
type Intent = keyof Colors['intent']

const getTrimStyle = (intent: Intent) => ({
  '&:before': {
    content: '""',
    width: 3,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.intent[intent]
  }
})

export interface GetAlertPropsParams {
  appearance?: string
  intent: Intent
  hasTrim?: boolean
}

/**
 * Get the themed props for the Alert component.
 * @param props
 * @param props.appearance - default theme supports `default` and `card`.
 * @param props.intent - intent of the alert. May be `none`.
 * @param props.hasTrim - when true, the alert has a trim.
 * @return Box props
 */
const getAlertProps = ({
  appearance,
  intent,
  hasTrim
}: GetAlertPropsParams): React.ComponentProps<typeof Box> => {
  const trimClassName = hasTrim ? css(getTrimStyle(intent)).toString() : ''

  switch (appearance) {
    case 'card':
      return { elevation: 1, borderRadius: 3, className: trimClassName }
    case 'default':
    default:
      return {
        boxShadow: `inset 0 0 0 1px ${scales.neutral.N4A}`,
        className: trimClassName
      }
  }
}

export default getAlertProps
