const baseStyle = {
  outline: 'none',
  textDecoration: 'none',
  display: 'flex',
  position: 'relative',
  backgroundColor: 'white',
  borderBottom: theme => `1px solid ${theme.colors.border.muted}`,
  fontFamily: 'fontFamilies.ui',
  color: 'colors.default',
  fontSize: 'fontSizes.2',
  fontWeight: 'fontWeights.normal',
  lineHeight: 'lineHeights.2',
  letterSpacing: 'letterSpacings.tight',

  _before: {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    borderRadius: '0px 2px 2px 0px',
    backgroundColor: 'colors.blue500',
    transition: '0.25s',
    transformOrigin: 'left center',
    transform: 'scaleX(0)'
  },

  _isSelectable: {
    cursor: 'pointer'
  },

  _hover: {
    backgroundColor: 'colors.gray75'
  },

  _focus: {
    backgroundColor: 'colors.gray75'
  },

  _active: {
    backgroundColor: 'intents.info.background',
    color: 'colors.dark'
  },

  _selected: {
    backgroundColor: 'intents.info.background',
    color: 'intents.info.text',

    '&:before': {
      transform: 'scaleX(1)'
    },
  },

  _disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
    cursor: 'not-allowed'
  }
}

export default {
  baseStyle,
}
