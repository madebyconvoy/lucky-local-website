<template>
    <div>
        <div ref="wrapper" class="opacity-0 relative overflow-hidden">
            <img
                class="absolute"
                src="@/assets/join-bg.svg"
                alt="background image"
            />

            <img
                v-for="item in markers"
                :key="item.id"
                :src="item.src"
                :style="item.style"
                ref="markers"
                class="absolute"
                alt="marker"
            />

            <img
                ref="hardware"
                class="absolute opacity-0"
                src="@/assets/join-display.svg"
                alt="display image"
            />

            <div
                ref="display"
                :style="dimensions.display"
                class="absolute overflow-hidden opacity-0"
            >
                <img
                    class="absolute"
                    src="@/assets/join-screen-bg.svg"
                    alt="screen bg"
                />
                <fade-right-to-left>
                    <img
                        v-for="(item, index) in screens"
                        :key="`screen-${index}`"
                        :src="require(`~/assets/${item.file}`)"
                        class="absolute"
                        v-if="index === active"
                        alt="screen image"
                    />
                </fade-right-to-left>
            </div>
        </div>
    </div>
</template>

<script>
import gsap, { Power2 } from 'gsap'
import FadeRightToLeft from '@/components/transitions/FadeRightToLeft'

export default {
    components: {
        FadeRightToLeft
    },

    mounted() {
        this.$refs.wrapper.style.paddingBottom = `${(this.dimensions.stage
            .height /
            this.dimensions.stage.width) *
            100}%`

        gsap.fromTo(
            this.$refs.wrapper,
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: Power2.easeInOut
            }
        )

        // fade in markers
        this.$refs.markers.forEach((marker, index) => {
            gsap.fromTo(
                marker,
                {
                    scale: 0
                },
                {
                    scale: 1,
                    duration: 0.4,
                    delay: 1 + index * 0.15,
                    ease: Power2.easeInOut
                }
            )
        })

        gsap.fromTo(
            [this.$refs.hardware, this.$refs.display],
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                delay: 0.4,
                ease: Power2.easeInOut
            }
        )

        setInterval(() => {
            this.activeScreen =
                this.activeScreen < this.screens.length - 1
                    ? this.activeScreen + 1
                    : 0
        }, 3000)
    },

    data() {
        return {
            active: 0
        }
    },

    computed: {
        dimensions() {
            let stage = {
                width: 681,
                height: 708
            }

            let display = {
                width: `${Math.round((187 / stage.width) * 10000) / 100}%`,
                height: `${Math.round((346 / stage.height) * 10000) / 100}%`,
                left: `${Math.round((248 / stage.width) * 10000) / 100}%`,
                top: `${Math.round((206 / stage.height) * 10000) / 100}%`
            }

            let marker = {
                width: 117,
                height: 137
            }

            return {
                display,
                stage,
                marker
            }
        },

        markers() {
            return [
                {
                    file: 'join-01.svg',
                    position: {
                        x: 7,
                        y: 392
                    }
                },
                {
                    file: 'join-02.svg',
                    position: {
                        x: 50,
                        y: 75
                    }
                },
                {
                    file: 'join-03.svg',
                    position: {
                        x: 83,
                        y: 259
                    }
                },
                {
                    file: 'join-04.svg',
                    position: {
                        x: 218,
                        y: 2
                    }
                },
                {
                    file: 'join-05.svg',
                    position: {
                        x: 427,
                        y: 58
                    }
                },
                {
                    file: 'join-06.svg',
                    position: {
                        x: 513,
                        y: 454
                    }
                },
                {
                    file: 'join-07.svg',
                    position: {
                        x: 565,
                        y: 217
                    }
                }
            ].map((marker, index) => {
                marker.id = `marker-${index}`

                marker.style = {
                    width: `${Math.round(
                        (this.dimensions.marker.width /
                            this.dimensions.stage.width) *
                            10000
                    ) / 100}%`,
                    height: `${Math.round(
                        (this.dimensions.marker.height /
                            this.dimensions.stage.height) *
                            10000
                    ) / 100}%`,
                    left: `${Math.round(
                        (marker.position.x / this.dimensions.stage.width) *
                            10000
                    ) / 100}%`,
                    top: `${Math.round(
                        (marker.position.y / this.dimensions.stage.height) *
                            10000
                    ) / 100}%`
                }

                marker.src = require(`~/assets/${marker.file}`)

                return marker
            })
        },

        screens() {
            return [
                {
                    file: 'join-screen-02.svg',
                    alt: 'screen image'
                },
                {
                    file: 'join-screen-01.svg',
                    alt: 'screen image'
                }
            ]
        }
    }
}
</script>
