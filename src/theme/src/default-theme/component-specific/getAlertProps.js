import { css } from 'glamor'
import scales from '../foundational-styles/scales'
import colors from '../foundational-styles/colors'

const getTrimStyle = (intent, theme) => {
  return {
    '&:before': {
      content: '""',
      width: 3,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: theme?.colors?.intent?.[intent] || colors.intent[intent]
    }
  }
}

/**
 * Get the themed props for the Alert component.
 * @param {Object} props
 * @param {string} props.appearance - default theme supports `default` and `card`.
 * @param {Intent} props.intent - intent of the alert. May be `none`.
 * @param {boolean} props.hasTrim - when true, the alert has a trim.
 * @param {Object} theme - the current theme
 * @return {Object} { className, ...themedProps }
 */
const getAlertProps = ({ appearance, intent, hasTrim }, theme) => {
  const trimClassName = hasTrim
    ? css(getTrimStyle(intent, theme)).toString()
    : ''

  switch (appearance) {
    case 'card':
      return { elevation: 1, borderRadius: 3, className: trimClassName }
    case 'default':
    default:
      return {
        boxShadow: `inset 0 0 0 1px ${theme?.scales?.neutral?.N4A ||
          scales.neutral.N4A}`,
        className: trimClassName
      }
  }
}

export default getAlertProps
