export default {
	id: 'operation-calculateScores',
	name: 'Calculate Scores',
	icon: 'box',
	description: 'This calculates the scores for the given keys!',
	overview: ({ keys }) => [
		{
			label: 'Keys',
			text: keys,
		},
	],
	options: [
		{
			field: 'keys',
			name: 'Rating Measure Keys',
			type: 'json',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
	],
};