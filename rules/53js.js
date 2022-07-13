module.exports = {
	rules: {
		'function-paren-newline': ['error', 'consistent'],
		indent: [2, 'tab'],
		'max-len': ['warn', 100, 2, {
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true
		}],
		'no-param-reassign': 0, // Reassigning params is sometimes what we want
		'no-tabs': 0,
		semi: 'warn',
		'spaced-comment': 0
	}
};
