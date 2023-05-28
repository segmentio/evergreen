const baseStyle = {
  borderBottom: 'default',
  background: 'colors.tint2',
  height: '56px',
  fontSize: 'fontSizes.1',
  fontWeight: 'fontWeights.bold',
  lineHeight: 'lineHeights.0',
  letterSpacing: 'letterSpacings.normal',
  fontFamily: 'fontFamilies.ui',
  color: 'colors.muted',
  textTransform: 'uppercase',

  selectors: {
    _firstOfType: {
      borderTopLeftRadius: 'radii.1',
      borderTopRightRadius: 'radii.1'
    }
  }
}

const appearances = {}

const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes
}
