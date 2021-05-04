import { PrismTheme } from 'prism-react-renderer'

const theme: PrismTheme = {
  plain: {
    backgroundColor: '#fafbff',
    color: '#474d66',
    outline: 'none',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#52bd94',
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#d14343',
      },
    },
    {
      types: ['selector', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#d14343',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#696f8c',
      },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: {
        color: '#10899e',
        background: '#ffffff',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#10899e',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#10899e',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#ffb020',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        'font-weight': 'bold',
      },
    },
    // }
  ],
}

export default theme
