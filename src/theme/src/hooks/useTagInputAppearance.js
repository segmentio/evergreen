import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'
import { StackingOrder } from '../../../constants'

const baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
}

const focusState = '&[aria-activedescendant]'
const disabledState = '&[aria-disabled="true"]'

const useTagInputAppearance = appearance => {
  const {
    tokens: { colors }
  } = useTheme()

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
export default memoizeClassName(useTagInputAppearance)
