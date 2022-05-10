import { get } from '../../../theme/src/theme-tools'

const baseStyle = (theme: any, { color }: any) => {
  return {
    fill:
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
      get(theme, `intents.${color}.icon`) ||
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
      get(theme, `colors.icon.${color}`) ||
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
      get(theme, `colors.${color}`) ||
      color,
  }
}

const appearances = {}
const sizes = {}

export default {
  baseStyle,
  appearances,
  sizes,
}
