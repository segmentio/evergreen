// Helper function to conform to 4 (px) minor scale.
export default function minorScale(x: number) {
  if (!Number.isInteger(x)) {
    throw new TypeError(
      `minorScale only accepts integers as input, instead ${x} was passed.`
    )
  }

  return x * 4
}
