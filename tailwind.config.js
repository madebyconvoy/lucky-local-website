module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: [],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
            '3xl': '1600px'
        },
        colors: {
            black: '#000000',
            white: '#FFFFFF',
            transparent: 'transparent',
            gray: {
                100: '#F2F5F9'
            },
            blue: {
                default: '#003F86',
                500: '#7F9FC2',
                120: '#ccd9e7',
                50: '#F2F5F9'
            }
        },
        fontFamily: {
            title: ['Averta', 'sans-serif'],
            body: ['Rubik', 'sans-serif']
        },
        fontWeight: {
            semibold: 600,
            extrabold: 800
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.03125em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
            widest: '.25em'
        },
        boxShadow: {
            default: '0 30px 40px 0 rgba(27,60,97,0.30)',
            lg: '0 17px 23px 0 rgba(27,60,97,0.30)',
            xl: '0 2px 80px 0 rgba(0,63,134,0.20)'
        },
        extend: {
            fontSize: {
                '14': '0.875rem',
                '16': '1rem',
                '18': '1.125rem',
                '22': '1.375rem',
                '26': '1.625rem',
                '30': '1.875rem',
                '40': '2.5rem',
                '56': '3.5rem'
            },
            lineHeight: {
                // none: '1',
                tighter: '1.11',
                tight: '1.24',
                // snug: '1.375',
                normal: '1.44'
                // relaxed: '1.625',
                // loose: '1.87',
            },
            spacing: {
                '0': '0rem', // 0px
                '0.5': '0.125rem', // 2px
                '1': '0.25rem', // 4px
                '1.5': '0.375rem', // 6px
                '2': '0.5rem', // 8px
                '2.5': '0.625rem', // 10px
                '3': '0.75rem', // 12px
                '3.5': '0.875rem', // 14px
                '4': '1rem', // 16px
                '4.5': '1.125rem', // 18px
                '5': '1.25rem', // 20px
                '5.5': '1.375rem', // 22px
                '6': '1.5rem', // 24px
                '7': '1.75rem', // 28px
                '8': '2rem', // 32px
                '9': '2.25rem', // 36px
                '10': '2.5rem', // 40px
                '11': '2.75rem', // 44px
                '12': '3rem', // 48px
                '13': '3.25rem', // 52px
                '14': '3.5rem', // 56px
                '15': '3.75rem', // 60px
                '16': '4rem', // 64px
                '17': '4.25rem', // 68px
                '18': '4.5rem', // 72px
                '19': '4.75rem', // 76px
                '20': '5rem', // 80px
                '22': '5.5rem', // 88px
                '24': '6rem', // 96px
                '26': '6.5rem', // 104px
                '28': '7rem', // 112px
                '32': '8rem', // 128px
                '36': '9rem', // 144px
                '40': '10rem', // 160px
                '44': '11rem', // 176px
                '48': '12rem', // 192px
                '52': '13rem', // 208px
                '56': '14rem', // 224px
                '60': '15rem', // 240px
                '64': '16rem', // 256px
                '68': '17rem', // 272px
                '72': '18rem', // 288px
                '76': '19rem', // 304px
                '80': '20rem', // 320px
                '96': '24rem', // 384px
                '128': '32rem' // 512px
            },
            padding: {
                full: '100%',
                '16/9': '56.25%' // 16:9
            },
            animation: {
                spin: 'spin 15s linear infinite'
            },
            inset: {
                '1/3': '33.333%',
                '1/2': '50%',
                '2/3': '66.666%',
                '1/6': '16.666%',
                '1/12': '8.333%'
            },
            gradientColorStops: theme => ({
                ...theme('colors')
                // 'cerise': '#DD386E',
                // 'amaranth': '#E6294D',
                // 'sienna': '#EE6960',
            }),
            fill: theme => ({
                ...theme('colors')
            }),
            stroke: theme => ({
                ...theme('colors')
            }),
            opacity: {
                '10': '0.1',
                '30': '0.3'
            },
            width: {
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '7/10': '70%'
            },
            borderRadius: {
                '3xl': '1.75rem' // 24px
            }
        }
    },
    variants: {
        fill: ['responsive', 'hover'],
        stroke: ['responsive', 'hover']
    },
    plugins: []
}
