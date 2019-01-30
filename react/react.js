module.exports = {
	extends: [
		'eslint-config-airbnb-base/rules/strict',
		'eslint-config-airbnb/rules/react',
	].map(require.resolve),
	rules: {
		'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/prefer-stateless-function': 1
	}
};
