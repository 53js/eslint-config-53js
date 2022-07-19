module.exports = {
	rules: {
		'function-paren-newline': ['error', 'consistent'],
		'import/prefer-default-export': 'off',
		indent: ['error', 'tab'],
		'max-len': ['warn', 100, 2, {
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true
		}],
		'no-param-reassign': 'off', // Reassigning params is sometimes what we want
		'no-tabs': 'off',
		semi: 'warn',
		'spaced-comment': 'off'
	}
};
