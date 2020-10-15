module.exports = {
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		fontFamily: {
			'TitilliumWeb': ['"Titillium Web"', 'sans-serif'],
		},
		colors: {
			blue: {
				lighter: '#46AAC3',
				default: '#0096B8',
			}
		},
		container: (theme) => ({
			center: true,
			padding: theme("spacing.4"),
		}),
	},
	variants: {},
	plugins: [],
}
