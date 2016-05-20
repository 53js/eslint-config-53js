module.exports = {
	extends: [
		'eslint-config-airbnb/legacy', // ES6 support coming soon
		'./rules/53js'
	].map(require.resolve),
	env: {
		es6: false,
		node: true,
		browser: true
	},
};
