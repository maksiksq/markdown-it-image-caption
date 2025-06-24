import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs',
                format: 'cjs',
                exports: 'auto',
            },
            {
                file: 'dist/index.mjs',
                format: 'esm',
            },
        ],
        plugins: [resolve(), commonjs(), terser(), typescript()],
    },
];