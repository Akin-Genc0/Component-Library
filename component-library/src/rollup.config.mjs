import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      noEmit: false,
      declaration: true,
      declarationDir: 'dist',
      outDir: 'dist',
    }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    image(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'next', 'next/image', 'next-themes'],
};