module.exports = {
	root: false,

	env: {
		node: true,
	},

	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},

	parserOptions: {
		parser: 'babel-eslint',
	},

	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
