import { PrismTheme } from 'prism-react-renderer'

const theme: PrismTheme = {
  plain: {
    backgroundColor: '#2b2b2b',
    color: '#FFFFFF',
    outline: 'none',
    lineHeight: 1.5,
    fontSize: 14,
    fontFamily: "Menlo, Consolas, Monaco, 'Andale Mono', monospace"
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#25CBD6',
      },
    },
    {
      types: ['property', 'tag'],
      style: {
        color: '#EE9191', //red
      },
    },
    {
      types: ['boolean', 'number', 'constant', 'symbol', 'deleted', 'url'],
      style: {
        color: '#9DB5FF', //blue
      },
    },
    {
      types: ['selector', 'attr-name'],
      style: {
        color: '#FFD079', //yellow
      },
    },
    {
      types: ['char', 'builtin', 'inserted'],
      style: {
        color: '#FFFFFF',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#FFFFFF',
      },
    },
    {
      types: ['operator', 'entity'],
      style: {
        color: '#FFFFFF',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword', 'string', 'function'],
      style: {
        color: '#52BD94', //green
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#FFF',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        'font-weight': 'bold',
      },
    },
  ],
}

export default theme
