module.exports = {
	rules: {
		'indent': ['error', 'tab'],
		'spaced-comment': [1, 'always', {
			'exceptions': ['-', '+'],
			'markers': ['=', '!', '/'] // space here to support sprockets directives
		}],
		// 'vars-on-top': 0,
		'no-underscore-dangle': [1, { 'allowAfterThis': true }],
		'wrap-iife': ['error', 'any']
	}
};
