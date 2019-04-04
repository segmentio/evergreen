// Helper function to conform to 8 (px) major scale.
export default function majorScale(x: number) {
  if (!Number.isInteger(x)) {
    throw new TypeError(
      `majorScale only accepts integers as input, instead ${x} was passed.`
    )
  }

  return x * 8
}
