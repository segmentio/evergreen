import { getValue, mergeTheme, resolveThemeTokens } from './theme-tools'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Theme tools', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getValue', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns the value based on a path lookup', () => {
      const obj = {
        foo: {
          bar: 'baz'
        }
      }

      const result = getValue(obj, 'foo.bar')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('baz')
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns the value as-is if the path cannot be resolved', () => {
      const obj = {
        foo: {
          bar: 'baz'
        }
      }

      const result = getValue(obj, '12px')
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('12px')
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('mergeTheme', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it.each([undefined, null, {}])('should return unmodified destinationTheme when sourceTheme is %p', (sourceTheme: any) => {
      const destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      }

      const result = mergeTheme(destinationTheme, sourceTheme)

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toStrictEqual(destinationTheme)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should override existing values', () => {
      const destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      }

      const sourceTheme = {
        colors: {
          gray700: 'updated'
        }
      }

      const result = mergeTheme(destinationTheme, sourceTheme)

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.colors.gray700).toBe(sourceTheme.colors.gray700)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should add new values without clobbering existing structure', () => {
      const destinationTheme = {
        components: {
          Button: {
            baseStyle: {
              _disabled: {
                cursor: 'not-allowed',
                pointerEvents: 'auto'
              }
            }
          }
        }
      }

      const sourceTheme = {
        components: {
          Button: {
            appearances: {
              tab: {
                _hover: {
                  backgroundColor: '#696f8c'
                },
                backgroundColor: 'white'
              }
            }
          }
        }
      }

      const result = mergeTheme(destinationTheme, sourceTheme)

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.components.Button.baseStyle).toMatchObject(destinationTheme.components.Button.baseStyle)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.components.Button.appearances).toMatchObject(sourceTheme.components.Button.appearances)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should always return a new reference', () => {
      const destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      }

      const sourceTheme = {
        colors: {
          gray700: 'updated'
        }
      }

      const result = mergeTheme(destinationTheme, sourceTheme)

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).not.toEqual(destinationTheme)
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('resolveThemeTokens', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('preserves nested object structures', () => {
      const theme = {}
      const props = {
        baseStyle: {
          color: 'blue'
        },
        appearances: {
          primary: {
            backgroundColor: 'pink'
          }
        }
      }

      const result = resolveThemeTokens(theme, props)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual(props)
    })

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('resolves keys if they exist in the theme', () => {
      const theme = {
        colors: {
          muted: 'gray',
          primary: 'pink'
        }
      }

      const props = {
        baseStyle: {
          color: 'colors.muted'
        },
        appearances: {
          primary: {
            backgroundColor: 'colors.primary'
          }
        }
      }

      const result = resolveThemeTokens(theme, props)
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual({
        baseStyle: {
          color: 'gray'
        },
        appearances: {
          primary: {
            backgroundColor: 'pink'
          }
        }
      })
    })
  })
})
