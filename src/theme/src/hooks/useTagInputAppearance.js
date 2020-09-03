import { useMemo } from 'react'
import { css } from 'glamor'
import useTheme from '../useTheme'
import { StackingOrder } from '../../../constants'

const baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
}

const focusState = '&[aria-activedescendant]'
const disabledState = '&[aria-disabled="true"]'

const getTagInputStyles = (appearance, theme) => {
  const {
    tokens: { colors }
  } = theme

  switch (appearance) {
    default:
      return {
        ...baseStyle,
        backgroundColor: 'white',
        border: `1px solid ${colors.gray400}`,
        [focusState]: {
          outline: 'none',
          zIndex: StackingOrder.FOCUSED,
          border: `1px solid ${colors.blue200}`,
          transition: 'box-shadow 80ms ease-in-out',
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [disabledState]: {
          cursor: 'not-allowed',
          backgroundColor: colors.gray100
        }
      }
  }
}

/**
 * Get the className of an `input` element - either `<TagInput />`, `<TextArea />`, or `<TextInput />` .
 * @param {string} appearance
 * @return {string} the appearance class name.
 */
function useTagInputAppearance(appearance = 'default') {
  const theme = useTheme()
  const className = useMemo(
    () => css(getTagInputStyles(appearance, theme)).toString(),
    [theme, appearance]
  )

  return className
}

export default useTagInputAppearance
