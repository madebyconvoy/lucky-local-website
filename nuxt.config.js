export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        base: '/'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Lucky Local',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'robots', name: 'robots', content: 'noindex' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Als Lucky Local Partner profitieren Sie doppelt! Steigern Sie Ihren Umsatz mit modernster Technologie, einem herausragenden Kundenerlebnis und einer innovativen Geschäftsatmosphäre. Präsentieren Sie Ihre Produkte bei allen Lucky Local Partnern in Ihrer Region und gewinnen Sie dadurch Neukunden.'
            },
            { name: 'application-name', content: '&nbsp;' },
            { name: 'msapplication-TileColor', content: '#FFFFFF' },
            {
                name: 'msapplication-TileImage',
                content: '/favicon/mstile-144x144.png'
            },
            {
                name: 'msapplication-square70x70logo',
                content: '/favicon/mstile-70x70.png'
            },
            {
                name: 'msapplication-square150x150logo',
                content: '/favicon/mstile-150x150.png'
            },
            {
                name: 'msapplication-wide310x150logo',
                content: '/favicon/mstile-310x150.png'
            },
            {
                name: 'msapplication-square310x310logo',
                content: '/favicon/mstile-310x310.png'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '57x57',
                href: '/favicon/apple-touch-icon-57x57.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '114x114',
                href: '/favicon/apple-touch-icon-114x114.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '72x72',
                href: '/favicon/apple-touch-icon-72x72.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '144x144',
                href: '/favicon/apple-touch-icon-144x144.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '60x60',
                href: '/favicon/apple-touch-icon-60x60.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '120x120',
                href: '/favicon/apple-touch-icon-120x120.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '76x76',
                href: '/favicon/apple-touch-icon-76x76.png'
            },
            {
                rel: 'apple-touch-icon-precomposed',
                sizes: '152x152',
                href: '/favicon/apple-touch-icon-152x152.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/favicon-196x196.png',
                sizes: '196x196'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/favicon-96x96.png',
                sizes: '96x96'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/favicon-32x32.png',
                sizes: '32x32'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/favicon-16x16.png',
                sizes: '16x16'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/favicon-128.png',
                sizes: '128x128'
            },
            {
                rel: 'stylesheet',
                href: '//fonts.googleapis.com/css2?family=Rubik&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/fonts.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/Glide.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'de'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
