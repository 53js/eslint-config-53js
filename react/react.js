module.exports = {
	extends: [
		'eslint-config-airbnb-base/rules/strict',
		'eslint-config-airbnb/rules/react',
		'eslint-config-airbnb/hooks',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2022,
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prefer-stateless-function': 'warn',
		'react/state-in-constructor': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: ['arrow-function', 'function-declaration'],
			},
		],
	}
};
