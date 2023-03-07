import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import image from '@rollup/plugin-image'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: 'dist/index.esm.js',
				format: 'esm',
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [
			typescript({ tsconfig: './tsconfig.json' }),
			babel({
				exclude: 'node_modules/**',
				presets: [
					'@babel/preset-react',
					'@babel/preset-env',
					'@babel/preset-typescript',
				],
			}),
			postcss({
				plugins: [],
				minimize: true,
			}),
			external(),
			resolve(),
			terser(),
			image(),
		],
	},
]
