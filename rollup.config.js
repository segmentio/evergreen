import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// Use peerDependencies as rollup external
// https://rollupjs.org/guide/en/#peer-dependencies
const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

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
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('development'),
          ...ignoreSSR
        }
      }),
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime'
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
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
          ...ignoreSSR
        }
      }),
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime'
      }),
      terser()
    ]
  }
]
