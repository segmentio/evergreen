import useTheme from '../useTheme'
import memoizeClassName from '../default-theme/utils/memoizeClassName'

const baseStyles = {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer'
}

const hoverState = '&:hover'
const currentState = '&[aria-current="page"], &[aria-selected="true"]'
const focusState = '&:focus'

const useTabApperance = (apperance, direction) => {
  const {
    tokens: { primary, colors }
  } = useTheme()

  const display = direction === 'horizontal' ? 'inline-flex' : 'flex'
  const width = direction === 'horizontal' ? 'auto' : '100%'
  const spacing =
    direction === 'horizontal'
      ? { marginRight: '8px' }
      : { marginBottom: '8px' }

  switch (apperance) {
    case 'primary':
      return {
        ...baseStyles,
        color: colors.muted,
        paddingTop: '6px',
        paddingBottom: '16px',
        paddingLeft: '2px',
        paddingRight: '2px',
        position: 'relative',
        display,
        width,

        ':not(:last-child)': {
          marginRight: '20px'
        },

        ':before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '2px',
          borderRadius: '2px 2px 0px 0px',
          backgroundColor: primary.base,
          width: '100%',
          transition: '0.25s cubic-bezier(0.8, 0.1, 0.38, 1.88)',
          transform: 'scaleY(0)',
          transformOrigin: 'bottom center'
        },

        [hoverState]: {
          color: colors.default
        },

        [currentState]: {
          color: primary.base,

          '&:before': {
            transform: 'scaleY(1)'
          },

          '&:focus': {
            color: primary.hover
          }
        },

        [focusState]: {
          outline: 'none',
          color: colors.default
        }
      }
    default:
      return {
        ...baseStyles,
        padding: '8px 16px',
        borderRadius: '4px',
        color: colors.default,
        display,
        width,

        ':not(:last-child)': spacing,

        [currentState]: {
          backgroundColor: colors.blue50,
          color: colors.blue500
        },

        [hoverState]: {
          backgroundColor: colors.blue100,
          color: colors.blue600
        },

        [focusState]: {
          outline: 'none',
          boxShadow: `0 0 0 2px ${colors.blue100}`
        }
      }
  }
}

export default memoizeClassName(useTabApperance)
