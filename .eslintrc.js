// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: ['flowtype', 'prettier'],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    // `js` and `jsx` are common extensions
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    // allow for functions to be declared after they used
    'no-use-before-define': 0,

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    'react/prefer-stateless-function': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
