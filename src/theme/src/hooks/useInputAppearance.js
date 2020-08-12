import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'

const baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  lineHeight: '12px',
  border: 'none'
}

const invalidState = '&[aria-invalid="true"]'
const placeholder = '&::placeholder'
const focusState = '&:focus'
const disabledState = '&:disabled'
const focusPlaceholderState = '&:disabled::placeholder'

const useInputAppearance = appearance => {
  const {
    tokens: { colors }
  } = useTheme()

  switch (appearance) {
    case 'none':
      return {
        ...baseStyle,
        backgroundColor: 'white',
        [invalidState]: {},
        [placeholder]: {
          color: colors.gray600
        },
        [focusState]: {
          outline: 'none'
        },
        [disabledState]: {
          cursor: 'not-allowed',
          backgroundColor: colors.gray100
        }
      }

    default:
      return {
        ...baseStyle,
        backgroundColor: 'white',
        border: `1px solid ${colors.gray400}`,
        [placeholder]: {
          color: colors.gray600
        },
        [invalidState]: {
          border: `1px solid ${colors.red500}`
        },
        [focusState]: {
          outline: 'none',
          border: `1px solid ${colors.blue200}`,
          boxShadow: `0 0 0 2px ${colors.blue100}`
        },
        [focusPlaceholderState]: {
          color: colors.gray700
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
export default memoizeClassName(useInputAppearance)
