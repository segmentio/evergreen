import test from 'ava'
import { getValue, resolveThemeTokens } from './theme-tools'

test('getValue returns the value based on a path lookup', t => {
  const obj = {
    foo: {
      bar: 'baz'
    }
  }

  const result = getValue(obj, 'foo.bar')
  t.is(result, 'baz')
})

test('getValue returns the value as-is if the path cannot be resolved', t => {
  const obj = {
    foo: {
      bar: 'baz'
    }
  }

  const result = getValue(obj, '12px')
  t.is(result, '12px')
})

test('resolveThemeTokens preserves nested object structures', t => {
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
  t.deepEqual(result, props)
})

test('resolveThemeTokens resolves keys if they exist in the theme', t => {
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
  t.deepEqual(result, {
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
