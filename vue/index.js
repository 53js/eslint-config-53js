module.exports = {
	extends: [
		'eslint-config-airbnb/base',
		'../rules/53js'
	].map(require.resolve),
	plugins: ['vue'],
	rules: {}
};
