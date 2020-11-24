export default {
	server: {
		port: 3000, // default: 3000
		host: '0.0.0.0' // default: localhost
	},

	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL,
		googleAnalytics: process.env.GA_ID
	},

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
			{
				hid: 'description',
				name: 'description',
				content: 'TJacob Junior Web Developer Portfolium',
			},
			{ hid:'msapplication', name: 'msapplication-TileColor', content: '#ffffff' },
			{ hid:'them-color', name: 'theme-color', content: '#ffffff' },
			{ hid: 'og:title', name: 'og:title', content: 'tjacob.dev' },
			{ hid: 'og:image', name: 'og:image', content: '/thumb.png' },
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:"#5bbad5" },
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'~assets/css/tailwind.css',
		'~assets/css/utilities.css',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		// https://github.com/FortAwesome/vue-fontawesome#installation
		'~/plugins/fontawesome.js'
	],

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
		'@nuxtjs/google-gtag',
	],

	purgeCSS: {
		mode: 'postcss',
		enabled: (process.env.NODE_ENV === 'production'),
		whitelistPatterns: [/svg.*/, /fa.*/],
	},

	// Content module configuration (https://go.nuxtjs.dev/content-config)
	content: {},

	googleFonts: {
		families: {
			'Titillium Web': {
				wght: [400, 600],
			},
		}
	},

	// Nuxt Router Configuration
	router: {
		linkActiveClass: 'bg-blue-lighter',
		linkExactActiveClass: '',
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

	// Google Tag Manager Settings
	'google-gtag': {
		id: process.env.GA_ID,
		config: {
			anonymize_ip: true, // anonymize IP
			send_page_view: false, // might be necessary to avoid duplicated page track on page reload
			linker: {
				domains: [process.env.URL]
			}
		},
		debug: true, // enable to track in dev mode
		disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
	}
}
