export function extractStyles() {
  console.warn(
    'extractStyles returns null in the UMD bundle. Please use cjs or esm when you develop an SSR app.'
  )

  return null
}

export function autoHydrate() {
  console.warn(
    'autoHydrate is an empty function in the UMD bundle. Please use cjs or esm when you develop an SSR app.'
  )
}
