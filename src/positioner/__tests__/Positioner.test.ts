import { Position } from '../../constants'
import getFittedPosition from '../src/getPosition'

const dimensions = (overrides: any) => ({
  height: 100,
  width: 100,
  ...overrides
})

const targetRect = (overrides: any) => ({
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

const viewport = (overrides: any) => ({
  height: 250,
  width: 850,
  ...overrides
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Positioner />', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('All positions work', () => {
    // @ts-expect-error ts-migrate(2550) FIXME: Property 'values' does not exist on type 'ObjectCo... Remove this comment to see the full error message
    const generatedPositions = Object.values(Position).map((position: any) => getFittedPosition({
      position,
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
      dimensions: dimensions(),
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
      targetRect: targetRect(),
      targetOffset,
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
      viewport: viewport()
    })
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(generatedPositions).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Position.LEFT repositions to the right', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFittedPosition({
        position: Position.LEFT,
        dimensions: dimensions({ width: 350 }),
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
        targetRect: targetRect(),
        targetOffset,
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
        viewport: viewport()
      })
    )
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Position.RIGHT repositions to the left', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFittedPosition({
        position: Position.RIGHT,
        dimensions: dimensions({ width: 250 }),
        targetRect: targetRect({ left: 800, x: 800, right: 850 }),
        targetOffset,
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Position.LEFT and Position.RIGHT will use the side with the most space', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Position.TOP repositions to the bottom', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFittedPosition({
        position: Position.TOP,
        dimensions: dimensions({ height: 250 }),
        targetRect: targetRect({ top: 20, y: 20 }),
        targetOffset,
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Position.BOTTOM repositions to the top', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('It pushes the rect to the right if overflowing on the left side', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFittedPosition({
        position: Position.BOTTOM,
        dimensions: dimensions({ width: 250, height: 110 }),
        targetRect: targetRect({ left: 10, x: 10, top: 10, y: 10, bottom: 20 }),
        targetOffset,
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
        viewport: viewport()
      })
    ).toMatchSnapshot()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('It pushes the rect to the top if overflowing on the bottom side', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
