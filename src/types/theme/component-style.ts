import { Appearance } from './appearance'
import { Size } from './size'
import { StyleProps } from './style-props'

export type ComponentStyle = {
  baseStyle?: StyleProps
  // @ts-expect-error ts-migrate(1336) FIXME: An index signature parameter type cannot be a type... Remove this comment to see the full error message
  appearances?: { [appearance: Appearance]: StyleProps }
  // @ts-expect-error ts-migrate(1337) FIXME: An index signature parameter type cannot be a unio... Remove this comment to see the full error message
  sizes?: { [size: Size]: StyleProps }
}
