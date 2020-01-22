import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

const namedExports = {
  'node_modules/react-is/index.js': ['isForwardRef'],
  'node_modules/react-tiny-virtual-list/node_modules/prop-types/index.js': [
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

export default [
  // UMD Development
  {
    input: 'src/index.umd.js',
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
      resolve(),
      commonjs({
        include: 'node_modules/**',
        namedExports
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  },
  // UMD Production
  {
    input: 'src/index.umd.js',
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
      resolve(),
      commonjs({
        include: 'node_modules/**',
        namedExports
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
