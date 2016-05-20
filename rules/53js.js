module.exports = {
	rules: {
		'indent': ['error', 'tab'],
		'spaced-comment': 0,
		//'vars-on-top': 0, // Prevent lisibiliy
		'no-underscore-dangle': [1, { 'allowAfterThis': true }],
		'wrap-iife': ['error', 'any'],
		'no-param-reassign': 0 // Reassigning params is sometimes what we want
	}
};
