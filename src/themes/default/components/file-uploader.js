import colors from '../tokens/colors'

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'colors.gray50',
  borderWidth: 1,
  borderRadius: 'radii.1',
  borderStyle: 'dashed',
  borderColor: 'colors.gray400',
  height: '100%',
  width: '100%',
  paddingX: 40,
  paddingY: 40,

  selectors: {
    _focus: {
      outline: 'none', // Disable default browser focus outline
      borderStyle: 'solid',
      borderColor: 'colors.blue200',
      boxShadow: `0px 0px 0px 2px ${colors.blue100}`
    },

    _hover: {
      cursor: 'pointer',
      backgroundColor: 'colors.gray90',
      borderColor: 'colors.gray600'
    },

    _hoverBrowseCopy: {
      color: 'colors.blue500',
      cursor: 'pointer'
    },

    _hoverOrDragCopy: {
      color: 'colors.gray800',
      cursor: 'pointer'
    },

    _disabled: {
      backgroundColor: 'colors.gray50',
      borderColor: 'colors.gray50',
      borderStyle: 'solid'
    },

    _dragHover: {
      backgroundColor: 'colors.blue50',
      borderColor: 'colors.blue500',
      borderStyle: 'solid'
    },

    _invalid: {
      backgroundColor: 'colors.red100',
      borderColor: 'colors.red500',
      borderStyle: 'solid'
    }
  }
}

export default {
  baseStyle
}
