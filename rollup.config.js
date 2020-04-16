import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

// Use peerDependencies as rollup external
// https://rollupjs.org/guide/en/#peer-dependencies
const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

// Explicitly specify unresolvable named exports.
// https://github.com/rollup/plugins/tree/master/packages/commonjs#namedexports
const namedExports = {
  'node_modules/react-is/index.js': ['isForwardRef'],
  'node_modules/prop-types/index.js': [
    'array',
    'arrayOf',
    'func',
    'number',
    'object',
    'oneOf',
    'oneOfType',
    'string'
  ]
}

// Ignore SSR imports in UMD, replace with empty functions
const ignoreSSR = {
  ssr: './ssr/index.umd.js'
}

export default [
  // UMD Development
  {
    input: 'src/index.js',
    external,
    output: {
      file: 'umd/evergreen.js',
      format: 'umd',
      name: 'EvergreenUI',
      indent: false,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        ...ignoreSSR
      }),
      resolve(),
      commonjs({
        include: 'node_modules/**',
        namedExports
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  },
  // UMD Production
  {
    input: 'src/index.js',
    external,
    output: {
      file: 'umd/evergreen.min.js',
      format: 'umd',
      name: 'EvergreenUI',
      indent: false,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        ...ignoreSSR
      }),
      resolve(),
      commonjs({
        include: 'node_modules/**',
        namedExports
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
