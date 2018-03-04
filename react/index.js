module.exports = {
	extends: [
		'eslint-config-airbnb',
		'../rules/53js'
	].map(require.resolve),
	rules: {
		'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/prefer-stateless-function': 1
	}
};
