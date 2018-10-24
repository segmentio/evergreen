import { Themer } from '../../../../themer'
import memoizeClassName from '../utils/memoizeClassName'

const interactiveAppearance = Themer.createBadgeAppearance({
  base: {},
  hover: {
    opacity: 0.8
  }
})

/**
 * Get the appearance of an interactive `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance object.
 */
const getBadgeAppearance = appearance => {
  switch (appearance) {
    case 'interactive':
      return interactiveAppearance
    default:
      return undefined
  }
}

/**
 * Get the className of a `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */
export default memoizeClassName(getBadgeAppearance)
