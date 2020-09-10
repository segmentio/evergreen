import getFittedPosition from '../src/getPosition'
import { Position } from '../../constants'

const dimensions = overrides => ({
  height: 100,
  width: 100,
  ...overrides
})

const targetRect = overrides => ({
  x: 250,
  y: 150,
  width: 50,
  height: 30,
  top: 150,
  bottom: 150 - 30,
  left: 250,
  right: 200,
  ...overrides
})

const targetOffset = 6

const viewport = overrides => ({
  height: 250,
  width: 850,
  ...overrides
})

describe('<Positioner />', () => {
  it('All positions work', () => {
    const generatedPositions = Object.values(Position).map(position =>
      getFittedPosition({
        position,
        dimensions: dimensions(),
        targetRect: targetRect(),
        targetOffset,
        viewport: viewport()
      })
    )
    expect(generatedPositions).toMatchSnapshot()
  })

  it('Position.LEFT repositions to the right', () => {
    expect(
      getFittedPosition({
        position: Position.LEFT,
        dimensions: dimensions({ width: 350 }),
        targetRect: targetRect(),
        targetOffset,
        viewport: viewport()
      })
    )
  })

  it('Position.RIGHT repositions to the left', () => {
    expect(
      getFittedPosition({
        position: Position.RIGHT,
        dimensions: dimensions({ width: 250 }),
        targetRect: targetRect({ left: 800, x: 800, right: 850 }),
        targetOffset,
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  it('Position.LEFT and Position.RIGHT will use the side with the most space', () => {
    expect(
      getFittedPosition({
        position: Position.LEFT,
        dimensions: dimensions({ width: 250 }),
        targetRect: targetRect({ left: 50, x: 50, right: 100 }),
        targetOffset,
        viewport: viewport({ width: 300 })
      })
    ).toMatchSnapshot()
  })

  it('Position.TOP repositions to the bottom', () => {
    expect(
      getFittedPosition({
        position: Position.TOP,
        dimensions: dimensions({ height: 250 }),
        targetRect: targetRect({ top: 20, y: 20 }),
        targetOffset,
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  it('Position.BOTTOM repositions to the top', () => {
    expect(
      getFittedPosition({
        position: Position.BOTTOM,
        dimensions: dimensions({ height: 250 }),
        targetRect: targetRect({ top: 290, y: 290, bottom: 295, height: 5 }),
        targetOffset,
        viewport: viewport({ height: 300 })
      })
    ).toMatchSnapshot()
  })

  it('It pushes the rect to the right if overflowing on the left side', () => {
    expect(
      getFittedPosition({
        position: Position.BOTTOM,
        dimensions: dimensions({ width: 250, height: 110 }),
        targetRect: targetRect({ left: 10, x: 10, top: 10, y: 10, bottom: 20 }),
        targetOffset,
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  it('It pushes the rect to the top if overflowing on the bottom side', () => {
    expect(
      getFittedPosition({
        position: Position.TOP,
        dimensions: dimensions({ width: 50, height: 100 }),
        targetRect: targetRect({ left: 100, x: 100, top: 550, y: 550 }),
        targetOffset,
        viewport: viewport({ height: 500 })
      })
    ).toMatchSnapshot()
  })
})
