import colors from 'evergreen-colors'

export default {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  '[disabled], [data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: colors.neutral['10A'],
    boxShadow: 'none',
    color: colors.neutral['300A']
  }
}
