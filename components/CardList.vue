<template>
    <div>
        <div
            v-for="(item, index) in items"
            ref="items"
            :key="`item-${index}`"
            class="flex py-8 px-7 shadow w-11/12 lg:w-2/3 mb-7 space-x-5 items-center"
            :class="
                index % 2
                    ? 'flex-row-reverse space-x-reverse bg-blue text-white self-end'
                    : 'bg-white'
            "
        >
            <svg
                class="w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                aria-hidden="true"
            >
                <g fill="none" fill-rule="evenodd">
                    <circle
                        :class="index % 2 ? 'fill-white' : 'fill-blue'"
                        cx="18"
                        cy="18"
                        r="18"
                    />
                    <path
                        :class="index % 2 ? 'stroke-blue' : 'stroke-white'"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M11.909 18.251l4.153 4 7.847-8"
                    />
                </g>
            </svg>
            <span
                class="font-title font-semibold italic text-16 leading-tight lg:text-18 block flex-1"
            >
                {{ item }}
            </span>
        </div>
    </div>
</template>

<script>
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
    props: ['items'],
    mounted() {
        this.$refs.items.forEach(item => {
            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    scale: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    ease: Power2.easeInOut,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: '+=1',
                        scrub: 0.8
                    }
                }
            )
        })
    }
}
</script>
