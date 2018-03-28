import Position from './Position'

/**
 * Utility to create rect
 */
const makeRect = ({ width, height }, { left, top }) => {
  return {
    width,
    height,
    left,
    top,
    right: left + width,
    bottom: top + height
  }
}

const flipHorizontal = position => {
  switch (position) {
    case Position.TOP_LEFT:
      return Position.BOTTOM_LEFT
    case Position.TOP:
    default:
      return Position.BOTTOM
    case Position.TOP_RIGHT:
      return Position.BOTTOM_RIGHT
    case Position.BOTTOM_LEFT:
      return Position.TOP_LEFT
    case Position.BOTTOM:
      return Position.TOP
    case Position.BOTTOM_RIGHT:
      return Position.TOP_RIGHT
  }
}

const isAlignedOnTop = position => {
  switch (position) {
    case Position.TOP_LEFT:
    case Position.TOP:
    case Position.TOP_RIGHT:
      return true
    default:
      return false
  }
}

const isAlignedOnBottom = position => {
  switch (position) {
    case Position.BOTTOM_LEFT:
    case Position.BOTTOM:
    case Position.BOTTOM_RIGHT:
      return true
    default:
      return false
  }
}

/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Position} position — the position the positioner should be on.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Object} targetRect — the rect of the target.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} viewport - the width and height of the viewport.
 * @param {Object} viewportOffset - offset from the viewport.
 * @return {Object} - { x: Number, y: Number }
 */
export default function getPosition({
  position,
  dimensions,
  targetRect,
  targetOffset,
  viewport,
  viewportOffset = 8
}) {
  const targetCenter =
    targetRect.left + targetRect.width / 2 - dimensions.width / 2
  const alignedTopY = targetRect.top - dimensions.height - targetOffset
  const alignedBottomY = targetRect.bottom + targetOffset
  const alignedRightX = targetRect.right - dimensions.width

  // Create a function that will fit the rect inside of the boundaries
  // and return a new rect.
  const fitInBoundaries = rect => {
    const fittedRect = { ...rect }

    if (rect.left < viewportOffset) {
      fittedRect.left = viewportOffset
    }

    if (rect.right > viewport.width - viewportOffset) {
      fittedRect.right = viewport.width - viewportOffset
    }

    if (
      isAlignedOnBottom(position) &&
      fittedRect.bottom > viewport.height + viewportOffset
    ) {
      return getPosition({
        position: flipHorizontal(position),
        dimensions,
        targetRect,
        targetOffset,
        viewport,
        viewportOffset
      })
    }

    if (isAlignedOnTop(position) && fittedRect.top < viewportOffset) {
      return getPosition({
        position: flipHorizontal(position),
        dimensions,
        targetRect,
        targetOffset,
        viewport,
        viewportOffset
      })
    }

    return fittedRect
  }

  switch (position) {
    case Position.TOP:
      return {
        position: Position.TOP_TOP,
        transformOrigin: 'bottom center',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: targetCenter,
            top: alignedTopY
          })
        )
      }
    case Position.TOP_LEFT:
      return {
        position: Position.TOP_LEFT,
        transformOrigin: 'bottom left',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: targetRect.left,
            top: alignedTopY
          })
        )
      }
    case Position.TOP_RIGHT:
      return {
        position: Position.TOP_RIGHT,
        transformOrigin: 'bottom right',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: alignedRightX,
            top: alignedTopY
          })
        )
      }
    default:
    case Position.BOTTOM:
      return {
        position: Position.BOTTOM,
        transformOrigin: 'top center',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: targetCenter,
            top: alignedBottomY
          })
        )
      }
    case Position.BOTTOM_LEFT:
      return {
        position: Position.BOTTOM_LEFT,
        transformOrigin: 'top left',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: targetRect.left,
            top: alignedBottomY
          })
        )
      }
    case Position.BOTTOM_RIGHT:
      return {
        position: Position.BOTTOM_RIGHT,
        transformOrigin: 'top right',
        ...fitInBoundaries(
          makeRect(dimensions, {
            left: alignedRightX,
            top: alignedBottomY
          })
        )
      }
  }
}
