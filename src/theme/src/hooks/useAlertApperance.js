import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'

const base = {
  borderRadius: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px',
  boxSizing: 'border-box'
}

function getAlertStyles(intent, theme) {
  const { intents } = theme

  const borderColor = intents[intent].border
  const backgroundColor = intents[intent].background

  return {
    ...base,
    borderColor,
    backgroundColor
  }
}

function useAlertApperance(intent) {
  const theme = useTheme()
  const className = useMemo(
    () => css(getAlertStyles(intent, theme)).toString(),
    [intent, theme]
  )
  return className
}

export default useAlertApperance
