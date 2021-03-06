import typescript from 'rollup-plugin-typescript'
import resolveNodeModules from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import builtinsGlobals from 'rollup-plugin-node-globals'

export default {
  entry: 'src/index.ts',
  format: 'umd',
  dest: 'lib/umd/yourLib.js',
  moduleName: 'yourLib',

  plugins: [
    typescript({ typescript: require('typescript')} ),
    resolveNodeModules({ module: true, jsnext: true, main: true }),
    commonjs(),
    builtins(),
    builtinsGlobals(),
  ],
}
