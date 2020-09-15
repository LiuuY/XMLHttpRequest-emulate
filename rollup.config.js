import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const { PRODUCTION } = process.env;

export default {
  input: 'src/XMLHttpRequest.ts',
  output: [
    {
      file: 'dist/XMLHttpRequest.js',
      name: 'XMLHttpRequestEmulate',
      format: 'iife',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
    }),
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        PRODUCTION ? 'production' : 'development'
      ),
    }),
    commonjs(),
  ],
};
