// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{
			dir: pkg.main,
			format: 'cjs'
		},
		{
			dir: pkg.module,
			format: 'esm'
		}
	],
	external: (mod) => [ ...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies) ].includes(mod),
	plugins: [ resolve(), babel({ babelHelpers: 'runtime' }) ]
};
