import { getValue, mergeTheme, resolveThemeTokens } from './theme-tools'

describe('Theme tools', () => {
  describe('getValue', () => {
    it('returns the value based on a path lookup', () => {
      const obj = {
        foo: {
          bar: 'baz'
        }
      }

      const result = getValue(obj, 'foo.bar')
      expect(result).toEqual('baz')
    })

    it('returns the value as-is if the path cannot be resolved', () => {
      const obj = {
        foo: {
          bar: 'baz'
        }
      }

      const result = getValue(obj, '12px')
      expect(result).toEqual('12px')
    })
  })

  describe('mergeTheme', () => {
    it.each([undefined, null, {}])('should return unmodified destinationTheme when sourceTheme is %p', sourceTheme => {
      const destinationTheme = {
        colors: {
          gray900: '#101840',
          gray800: '#474d66',
          gray700: '#696f8c'
        }
      }

      const result = mergeTheme(destinationTheme, sourceTheme)

      expect(result).toStrictEqual(destinationTheme)
    })

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

      expect(result.colors.gray700).toBe(sourceTheme.colors.gray700)
    })

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

      expect(result.components.Button.baseStyle).toMatchObject(destinationTheme.components.Button.baseStyle)
      expect(result.components.Button.appearances).toMatchObject(sourceTheme.components.Button.appearances)
    })

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

      expect(result).not.toEqual(destinationTheme)
    })
  })

  describe('resolveThemeTokens', () => {
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
      expect(result).toEqual(props)
    })

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
