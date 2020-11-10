const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		fontFamily: {
			'TitilliumWeb': ['"Titillium Web"', 'sans-serif'],
		},
		extend:{
			colors: {
				primary: '#0096B8',
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
	},
	variants: {
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		transform: ['responsive', 'hover', 'focus', 'group-hover'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
		gradientColorStops: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		transitionProperty: ['responsive', 'hover', 'focus'],
	},
	plugins: [
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts'
		]
	}
}
