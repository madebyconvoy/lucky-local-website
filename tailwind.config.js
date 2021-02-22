module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
        },
        colors: {
            white: '#FFFFFF',
            transparent: 'transparent',
            gray: {
                100: '#F2F5F9',
            },
            blue: {
                default: '#003F86',
                100: '#7F9FC2'
            },
        },
        extend: {
            padding: {
                full: '100%'
            },
            animation: {
                'spin': 'spin 15s linear infinite',
            },
            inset: {
                '1/3': '33.333%',
            },
        },
    },
    variants: {},
    plugins: [],
}
