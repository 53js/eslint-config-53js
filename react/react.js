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
		'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-props-no-spreading': 'off',
		'react/prefer-stateless-function': 1,
		'react/state-in-constructor': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: ['arrow-function', 'function-declaration'],
			},
		],
	}
};
