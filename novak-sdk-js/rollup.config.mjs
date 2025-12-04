import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.json' })],
  },

  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [nodeResolve(), typescript()],
  },

  // Browser bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/browser/novak-sdk.js',
      format: 'umd',
      name: 'NOVAK',
      sourcemap: true,
    },
    plugins: [nodeResolve(), typescript()],
  }
];
