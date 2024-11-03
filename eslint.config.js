import n from 'eslint-plugin-n';

export default [
	{
		files: ['**/*.ts'],
		plugins: { n },
		settings: {
			n: {
				tryExtensions: ['.ts'],
			},
		},
		rules: {
			'n/no-extraneous-import': 'error',
		},
	}
]