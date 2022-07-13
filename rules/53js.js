module.exports = {
	rules: {
		'no-tabs': 0,
		indent: [2, 'tab'],
		'spaced-comment': 0,
		'no-param-reassign': 0, // Reassigning params is sometimes what we want
		'function-paren-newline': ['error', 'consistent'],
		'max-len': ['warn', 100, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
	}
};
