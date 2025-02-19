import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: './dist/bundle.min.js',
    format: 'iife',
  },
  plugins: [resolve(), commonjs(), terser()],
};
