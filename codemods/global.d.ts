declare module 'jscodeshift/dist/testUtils' {
  export function defineTest(
    dirName: string,
    transformName: string,
    options: Record<string, string>,
    testFilePrefix: string
  ): void
}
