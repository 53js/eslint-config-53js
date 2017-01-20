module.exports = {
	extends: [
		'eslint-config-airbnb/legacy', // ES6 support coming soon
		'../rules/53js'
	].map(require.resolve),

	plugins: ['vue'],

	env: {
		es6: true,
		node: true,
		browser: true
	}
};
