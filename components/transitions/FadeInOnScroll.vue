<template>
    <div ref="wrapper">
        <slot />
    </div>
</template>

<script>
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
    props: {
        start: {
            type: String,
            default: 'top 95%'
        },
        duration: {
            type: Number,
            default: 0.4
        },
        delay: {
            type: Number,
            default: 0.2
        }
    },

    mounted() {
        let tl = gsap.timeline({ paused: true })
        this.$refs.wrapper.children.forEach((element, index) => {
            tl.fromTo(
                element,
                {
                    opacity: 0,
                    scale: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: this.duration,
                    ease: Power2.easeInOut
                },
                index * this.delay
            )
        })

        ScrollTrigger.create({
            trigger: this.$refs.wrapper,
            start: this.start,
            end: 'bottom 95%',
            toggleActions: 'play none reverse none',
            animation: tl
        })
    }
}
</script>
