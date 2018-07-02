import Position from './Position'

/**
 * Function to create a Rect.
 * @param {Object} dimensions
 * @param {Number} dimensions.width
 * @param {Number} dimensions.height
 * @param {Object} position
 * @param {Number} position.left
 * @param {Number} position.top
 * @return {Object} Rect { width, height, left, top, right, bottom }
 */
const makeRect = ({ width, height }, { left, top }) => {
  const ceiledLeft = Math.ceil(left)
  const ceiledTop = Math.ceil(top)
  return {
    width,
    height,
    left: ceiledLeft,
    top: ceiledTop,
    right: ceiledLeft + width,
    bottom: ceiledTop + height
  }
}

/**
 * Function to flip a position upside down.
 * @param {Position} position
 * @return {Position} flipped position
 */
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

/**
 * Function that returns if position is aligned on top.
 * @param {Position} position
 * @return {Boolean}
 */
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

/**
 * Function that returns if a rect fits on bottom.
 * @param {Rect} rect
 * @param {Object} viewport
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnBottom = (rect, viewport, viewportOffset) => {
  return rect.bottom < viewport.height - viewportOffset
}

/**
 * Function that returns if a rect fits on top.
 * @param {Rect} rect
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnTop = (rect, viewportOffset) => {
  return rect.top > viewportOffset
}

/**
 * Function that returns the CSS `tranform-origin` property.
 * @param {Rect} rect
 * @param {Position} position
 * @param {Number} targetCenter - center of the target.
 * @return {String} transform origin
 */
const getTransformOrigin = ({ rect, position, targetCenter }) => {
  const center = Math.round(targetCenter - rect.left)
  if (isAlignedOnTop(position)) {
    return `bottom ${center}px`
  }
  return `top ${center}px`
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
export default function getFittedPosition({
  position,
  dimensions,
  targetRect,
  targetOffset,
  viewport,
  viewportOffset = 8
}) {
  const targetCenter = targetRect.left + targetRect.width / 2

  const { rect, position: finalPosition } = getPosition({
    position,
    dimensions,
    targetRect,
    targetOffset,
    viewport,
    viewportOffset
  })

  // Push rect to the right if overflowing on the left side of the viewport.
  if (rect.left < viewportOffset) {
    rect.right += Math.ceil(Math.abs(rect.left - viewportOffset))
    rect.left = Math.ceil(viewportOffset)
  }

  // Push rect to the left if overflowing on the right side of the viewport.
  if (rect.right > viewport.width - viewportOffset) {
    const delta = Math.ceil(rect.right - (viewport.width - viewportOffset))
    rect.left -= delta
    rect.right -= delta
  }

  const transformOrigin = getTransformOrigin({
    rect,
    position: finalPosition,
    targetCenter
  })

  return {
    rect,
    position: finalPosition,
    transformOrigin
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
 * @return {Object} - { rect: Rect, position: Position }
 */
function getPosition({
  position,
  dimensions,
  targetRect,
  targetOffset,
  viewport,
  viewportOffset = 8
}) {
  const positionIsAlignedOnTop = isAlignedOnTop(position)
  let topRect
  let bottomRect

  if (positionIsAlignedOnTop) {
    topRect = getRect({
      position,
      dimensions,
      targetRect,
      targetOffset
    })
    bottomRect = getRect({
      position: flipHorizontal(position),
      dimensions,
      targetRect,
      targetOffset
    })
  } else {
    topRect = getRect({
      position: flipHorizontal(position),
      dimensions,
      targetRect,
      targetOffset
    })
    bottomRect = getRect({
      position,
      dimensions,
      targetRect,
      targetOffset
    })
  }

  const topRectFitsOnTop = getFitsOnTop(topRect, viewportOffset)
  const bottomRectFitsOnBottom = getFitsOnBottom(
    bottomRect,
    viewport,
    viewportOffset
  )

  if (positionIsAlignedOnTop && topRectFitsOnTop) {
    return {
      position,
      rect: topRect
    }
  }

  if (!positionIsAlignedOnTop) {
    if (bottomRectFitsOnBottom) {
      return {
        position,
        rect: bottomRect
      }
    } else if (topRectFitsOnTop) {
      return {
        position: flipHorizontal(position),
        rect: topRect
      }
    }
  }

  // Default to most spacious if there is no fit.
  const spaceBottom = Math.abs(
    viewport.height - viewportOffset - bottomRect.bottom
  )
  const spaceTop = Math.abs(topRect.top - viewportOffset)

  if (spaceBottom < spaceTop) {
    return {
      position: positionIsAlignedOnTop ? flipHorizontal(position) : position,
      rect: bottomRect
    }
  }

  return {
    position: positionIsAlignedOnTop ? position : flipHorizontal(position),
    rect: topRect
  }
}

/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Object} position - the width and height of the viewport.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Object} targetRect — the rect of the target.
 * @return {Object} - { x: Number, y: Number }
 */
function getRect({ position, targetOffset, dimensions, targetRect }) {
  const leftRect = targetRect.left + targetRect.width / 2 - dimensions.width / 2
  const alignedTopY = targetRect.top - dimensions.height - targetOffset
  const alignedBottomY = targetRect.bottom + targetOffset
  const alignedRightX = targetRect.right - dimensions.width

  switch (position) {
    case Position.TOP:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedTopY
      })
    case Position.TOP_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedTopY
      })
    case Position.TOP_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedTopY
      })
    default:
    case Position.BOTTOM:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedBottomY
      })
    case Position.BOTTOM_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedBottomY
      })
    case Position.BOTTOM_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedBottomY
      })
  }
}
