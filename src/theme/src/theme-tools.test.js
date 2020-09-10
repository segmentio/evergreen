import { getValue, resolveThemeTokens } from './theme-tools'

describe('Theme tools', () => {
  it('getValue returns the value based on a path lookup', () => {
    const obj = {
      foo: {
        bar: 'baz'
      }
    }

    const result = getValue(obj, 'foo.bar')
    expect(result).toEqual('baz')
  })

  it('getValue returns the value as-is if the path cannot be resolved', () => {
    const obj = {
      foo: {
        bar: 'baz'
      }
    }

    const result = getValue(obj, '12px')
    expect(result).toEqual('12px')
  })

  it('resolveThemeTokens preserves nested object structures', () => {
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

  it('resolveThemeTokens resolves keys if they exist in the theme', () => {
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
