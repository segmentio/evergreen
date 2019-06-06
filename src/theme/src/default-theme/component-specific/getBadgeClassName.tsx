import { Rule } from 'glamor'
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
 * @param appearance - the appearance name
 * @return the appearance object.
 */
const getBadgeAppearance = (appearance: string): Rule | undefined => {
  switch (appearance) {
    case 'interactive':
      return interactiveAppearance
    default:
      return undefined
  }
}

/**
 * Get the className of a `Badge`.
 * @param appearance - the appearance name
 * @return the appearance class name.
 */
export default memoizeClassName(getBadgeAppearance)
