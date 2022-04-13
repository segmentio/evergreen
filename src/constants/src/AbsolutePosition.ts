import { Rect } from '../../positioner/src/getPosition'
import { PositionTypes } from '../../types'
import Position from './Position'

const AbsolutePositions: Record<Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>, Partial<Rect>> = {
  [Position.TOP_LEFT]: {
    top: 50,
    left: 50
  },
  [Position.TOP_RIGHT]: {
    top: 50,
    right: 50
  },
  [Position.BOTTOM_LEFT]: {
    bottom: 50,
    left: 50
  },
  [Position.BOTTOM_RIGHT]: {
    bottom: 50,
    right: 50
  }
}

export default AbsolutePositions
