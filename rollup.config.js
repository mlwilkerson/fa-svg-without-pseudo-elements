import resolve from '@rollup/plugin-node-resolve'

const plugins = [resolve()]

export default [
  {
    input: 'src/fontawesome.js',
    output: {
      file: 'dist/fontawesome.js',
      format: 'esm'
    },
    plugins
  }
]
