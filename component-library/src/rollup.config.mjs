import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
  ],
  plugins: [
    postcss({
      extract: 'styles.css',
      minimize: true,
      plugins: [],
      config: {
        path: './postcss.config.mjs',
      },
    }),
    typescript({
      tsconfig: './tsconfig.json',
      noEmit: false,
      declaration: true,
      declarationDir: 'dist',
      outDir: 'dist',
      include: ['src/index.ts', 'src/components/**/*.tsx', 'src/app/globals.css'],
      exclude: ['src/app/**', 'src/db/**', 'src/lib/**', 'src/authConfig.ts', 'src/proxy.ts', 'src/components/form.tsx', 'src/components/hero.tsx', 'src/components/nav.tsx', 'src/components/newnav.tsx', 'src/components/cardText.tsx', 'src/components/cardLink.tsx', 'src/components/themeSwitch.tsx'],
      incremental: false,
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