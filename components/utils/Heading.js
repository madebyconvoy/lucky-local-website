export default {
    props: {
        level: {
            type: Number,
            default: 2
        }
    },

    render(h) {
        let style = {
            1: 'font-title text-26 leading-tight md:text-40 xl:text-56 xl:leading-tighter',
            2: 'font-title font-extrabold text-26 leading-tight lg:text-30',
            3: 'font-title font-semibold italic text-16 leading-tight lg:text-18'
        }

        return h(
            'h' + this.level,
            {
                class: style[this.level]
            },
            this.$slots.default
        )
    }
}
