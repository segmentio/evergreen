import test from 'ava'
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

test('All positions work', t => {
  const generatedPositions = Object.values(Position).map(position =>
    getFittedPosition({
      position,
      dimensions: dimensions(),
      targetRect: targetRect(),
      targetOffset,
      viewport: viewport()
    })
  )
  t.snapshot(generatedPositions)
})

test('Position.LEFT repositions to the right', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.LEFT,
      dimensions: dimensions({ width: 350 }),
      targetRect: targetRect(),
      targetOffset,
      viewport: viewport()
    })
  )
})

test('Position.RIGHT repositions to the left', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.RIGHT,
      dimensions: dimensions({ width: 250 }),
      targetRect: targetRect({ left: 800, x: 800, right: 850 }),
      targetOffset,
      viewport: viewport()
    })
  )
})

test('Position.LEFT and Position.RIGHT will use the side with the most space', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.LEFT,
      dimensions: dimensions({ width: 250 }),
      targetRect: targetRect({ left: 50, x: 50, right: 100 }),
      targetOffset,
      viewport: viewport({ width: 300 })
    })
  )
})

test('Position.TOP repositions to the bottom', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.TOP,
      dimensions: dimensions({ height: 250 }),
      targetRect: targetRect({ top: 20, y: 20 }),
      targetOffset,
      viewport: viewport()
    })
  )
})

test('Position.BOTTOM repositions to the top', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.BOTTOM,
      dimensions: dimensions({ height: 250 }),
      targetRect: targetRect({ top: 290, y: 290, bottom: 295, height: 5 }),
      targetOffset,
      viewport: viewport({ height: 300 })
    })
  )
})

test('It pushes the rect to the right if overflowing on the left side', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.BOTTOM,
      dimensions: dimensions({ width: 250, height: 110 }),
      targetRect: targetRect({ left: 10, x: 10, top: 10, y: 10, bottom: 20 }),
      targetOffset,
      viewport: viewport()
    })
  )
})

test('It pushes the rect to the top if overflowing on the bottom side', t => {
  t.snapshot(
    getFittedPosition({
      position: Position.TOP,
      dimensions: dimensions({ width: 50, height: 100 }),
      targetRect: targetRect({ left: 100, x: 100, top: 550, y: 550 }),
      targetOffset,
      viewport: viewport({ height: 500 })
    })
  )
})
