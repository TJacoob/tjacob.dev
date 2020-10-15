export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'tjacob.dev',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'~assets/styles/tailwind.css',
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://github.com/nuxt-community/google-fonts-module
		'@nuxtjs/google-fonts',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'nuxt-purgecss',
		'@tailwindcss/ui',
	],

	purgeCSS: {
		mode: 'postcss',
		enabled: (process.env.NODE_ENV === 'production')
	},

	// Content module configuration (https://go.nuxtjs.dev/content-config)
	content: {},

	googleFonts: {
		families: {
			'Titillium Web': {
				wght: [400, 700],
			},
		}
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		postcss: {
			plugins: {
				'postcss-import': {},
				tailwindcss: './tailwind.config.js',
				'postcss-nested': {}
			}
		},
		preset: {
			stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
		}
	},
}
