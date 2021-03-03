<template>
    <div class="antialiased font-body overflow-x-hidden">
        <div
            class="py-5 px-7 md:py-16 bg-white md:bg-transparent absolute top-0 w-full z-50"
        >
            <Container class="flex justify-between ">
                <NuxtLink to="/"><Logo class="w-24 md:w-44 lg:w-56"/></NuxtLink>
                <button
                    class="focus:outline-none inline-flex items-center space-x-4 text-blue"
                >
                    <span
                        class="font-title font-extrabold text-14 md:text-18 leading-tight"
                        >Hi, Lucky You</span
                    >
                    <span
                        @click="toggleContact"
                        ref="contact"
                        class="relative w-10 h-10 md:w-15 md:h-15 transform hover:scale-110 duration-150 ease-in-out"
                    >
                        <svg
                            class="absolute w-full text-blue-50 md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 61 61"
                        >
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M30.5 61c3.327 0 6.53-.533 9.526-1.517 3.216-1.056 9.616 2.892 12.26.895 2.304-1.741.934-9.326 2.662-11.64A30.365 30.365 0 0061 30.5C61 13.655 47.345 0 30.5 0S0 13.655 0 30.5 13.655 61 30.5 61z"
                            />
                        </svg>
                        <svg
                            ref="contactBg"
                            class="opacity-0 absolute w-full text-blue-500 z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 61 61"
                        >
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M30.5 61c3.327 0 6.53-.533 9.526-1.517 3.216-1.056 9.616 2.892 12.26.895 2.304-1.741.934-9.326 2.662-11.64A30.365 30.365 0 0061 30.5C61 13.655 47.345 0 30.5 0S0 13.655 0 30.5 13.655 61 30.5 61z"
                            />
                        </svg>
                        <svg
                            ref="contactClose"
                            class="hidden absolute w-4.5 md:w-6 z-20 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 21 21"
                        >
                            <path
                                fill="none"
                                fill-rule="evenodd"
                                stroke="#FFF"
                                stroke-linecap="round"
                                stroke-width="2"
                                vector-effect="non-scaling-stroke"
                                d="M2.053 2.053l17.086 17.086M19.139 2.053L2.053 19.139"
                            />
                        </svg>
                        <svg
                            ref="contactPhone"
                            class="hidden absolute w-4.5 md:w-6 z-20 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 29"
                        >
                            <path
                                fill="none"
                                fill-rule="evenodd"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                vector-effect="non-scaling-stroke"
                                d="M3.223 17.632C-.674 10.815 1.047 4.554 4.587 2.576 6.61 1.445 8.548.922 10.399 1.009l1.09 1.073-1.266 6.173-3.75 1.254c.302 2.22 1.022 4.41 2.16 6.57 1.274 1.9 2.752 3.505 4.435 4.82l.364.276 2.997-2.515 6.156 2.025.415 1.45c-.848 1.595-2.284 2.958-4.308 4.089-3.54 1.978-10.002.29-14.15-6.386l-.003.001-1.316-2.207z"
                            />
                        </svg>
                    </span>
                </button>
            </Container>
        </div>

        <div class="md:px-7">
            <Container class="relative">
                <fade-in-out>
                    <div
                        v-if="contactActive"
                        class="popout z-40 absolute right-0 top-0 mt-20 md:mt-44 md:-mr-3 3xl:-mr-20 rounded text-blue bg-blue-50 shadow-xl w-full md:w-128 p-7 md:px-15 md:py-11 text-center md:text-left"
                    >
                        <div class="arrow-up"></div>
                        <Heading :level="2" class="mb-3"
                            >Wie können wir dir helfen?</Heading
                        >
                        <Heading :level="3" class="mb-8"
                            >Du hast eine Frage oder möchtest mit uns über eine
                            mögliche Zusammenarbeit sprechen? Unser Team hilft
                            dir jederzeit gerne weiter!</Heading
                        >
                        <a href="mailto:sales@luckylocal.de" class="mb-4 block">
                            <Button type="primary"
                                >Jetzt Beratungstermin vereinbaren</Button
                            >
                        </a>
                        <a href="tel:+4940303841514">
                            <Button
                                type="secondary"
                                class="flex items-center space-x-2"
                            >
                                <svg
                                    class="w-12 flex-grow-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 47 47"
                                >
                                    <g fill="none" fill-rule="evenodd">
                                        <circle
                                            cx="23.5"
                                            cy="23.5"
                                            r="23.5"
                                            fill="#F2F5F9"
                                        />
                                        <path
                                            stroke="#003F86"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.893 27.373c-3.897-6.816-2.176-13.078 1.364-15.056 2.024-1.131 3.961-1.653 5.812-1.567l1.09 1.073-1.266 6.173-3.75 1.254c.303 2.22 1.023 4.41 2.16 6.57 1.274 1.9 2.752 3.506 4.436 4.82l.364.277L28.1 28.4l6.155 2.025.415 1.45c-.847 1.595-2.283 2.958-4.307 4.089-3.54 1.978-10.002.29-14.15-6.386l-.003.001-1.317-2.207z"
                                        />
                                    </g>
                                </svg>
                                <span class="flex-1">
                                    040 / 303841514
                                </span>
                            </Button>
                        </a>
                    </div>
                </fade-in-out>
            </Container>
        </div>

        <Nuxt />

        <footer class="bg-blue text-white ">
            <Container class="px-7 py-16 md:py-26">
                <Heading class="text-center mb-5 text-center"
                    >Interesse geweckt?</Heading
                >
                <Heading :level="3" class="text-center mb-6 md:mb-8 text-center"
                    >Werde jetzt ein Lucky Local! Wenn du Fragen hast, hilft dir
                    unser Team gerne weiter!?</Heading
                >
                <div
                    class="flex md:space-x-5 w-full justify-center flex-wrap md:flex-no-wrap"
                >
                    <a
                        href="mailto:info@luckylocal.de?subject=Beratungstermin&body=Liebes%20Lucky%20Local%20Team%2C "
                        class="mb-4 block w-full max-w-sm "
                    >
                        <Button type="primary"
                            >Jetzt Beratungstermin vereinbaren</Button
                        >
                    </a>
                    <a href="tel:+4940303841514" class="block w-full max-w-sm ">
                        <Button type="secondary" class="flex items-center ">
                            <svg
                                class="w-12 flex-grow-0"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 47 47"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <circle
                                        cx="23.5"
                                        cy="23.5"
                                        r="23.5"
                                        fill="#F2F5F9"
                                    />
                                    <path
                                        stroke="#003F86"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14.893 27.373c-3.897-6.816-2.176-13.078 1.364-15.056 2.024-1.131 3.961-1.653 5.812-1.567l1.09 1.073-1.266 6.173-3.75 1.254c.303 2.22 1.023 4.41 2.16 6.57 1.274 1.9 2.752 3.506 4.436 4.82l.364.277L28.1 28.4l6.155 2.025.415 1.45c-.847 1.595-2.283 2.958-4.307 4.089-3.54 1.978-10.002.29-14.15-6.386l-.003.001-1.317-2.207z"
                                    />
                                </g>
                            </svg>
                            <span class="flex-1">
                                040 / 303841514
                            </span>
                        </Button>
                    </a>
                </div>
            </Container>
            <div class="bg-black bg-opacity-10">
                <Container>
                    <ul
                        class="px-7 py-13 md:flex md:space-x-10 font-title text-18 justify-center"
                    >
                        <li>
                            <NuxtLink to="/agb" class="hover:underline"
                                >AGB</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink to="/impressum" class="hover:underline"
                                >Impressum</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink to="/datenschutz" class="hover:underline"
                                >Datenschutz</NuxtLink
                            >
                        </li>
                        <!-- <li><a class="hover:underline" href="#">Cookie-Einstellungen</a></li> -->
                    </ul>
                </Container>
            </div>
        </footer>
        <CookieConsent />
    </div>
</template>

<script>
import Logo from '@/components/Logo'
import Container from '@/components/utils/Container'
import { Button, Heading, Paragraph } from '@/components/utils'
import FadeInOut from '@/components/transitions/FadeInOut'
import gsap, { Power2 } from 'gsap'
import CookieConsent from '@/components/CookieConsent'

export default {
    components: {
        Container,
        Logo,
        Button,
        Heading,
        Paragraph,
        FadeInOut,
        CookieConsent,
    },

    data() {
        return {
            contactActive: false,
            contactTimeLine: null,
            contactBgTimeline: null
        }
    },

    mounted() {
        gsap.fromTo(
            this.$refs.contactPhone,
            {
                scale: 0,
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50
            },
            {
                display: 'block',
                scale: 1,
                duration: 0.3,
                ease: Power2.easeInOut
            }
        )

        this.contactTimeLine = gsap.timeline({ paused: true })
        this.contactTimeLine
            .fromTo(
                this.$refs.contactPhone,
                {
                    scale: 1,
                    left: '50%',
                    top: '50%',
                    xPercent: -50,
                    yPercent: -50
                },
                {
                    scale: 0,
                    duration: 0.3,
                    ease: Power2.easeInOut
                },
                0
            )
            .fromTo(
                this.$refs.contactClose,
                {
                    scale: 0,
                    display: 'none',
                    left: '50%',
                    top: '50%',
                    xPercent: -50,
                    yPercent: -50
                },
                {
                    display: 'block',
                    scale: 1,
                    duration: 0.3,
                    ease: Power2.easeInOut
                },
                0.15
            )

        this.contactBgTimeline = gsap.timeline({ paused: true })
        this.contactBgTimeline.fromTo(
            this.$refs.contactBg,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                ease: Power2.easeInOut
            }
        )
        this.contactBgTimeline.fromTo(
            this.$refs.contactPhone,
            {
                color: '#003F86'
            },
            {
                color: '#FFF',
                duration: 0.2,
                ease: Power2.easeInOut
            },
            0
        )

        this.$refs.contact.addEventListener('mouseenter', () =>
            this.contactBgTimeline.play()
        )
        this.$refs.contact.addEventListener(
            'mouseleave',
            () => !this.contactActive && this.contactBgTimeline.reverse()
        )
    },

    methods: {
        toggleContact() {
            !this.contactActive
                ? this.contactTimeLine.play()
                : this.contactTimeLine.reverse()
            this.contactActive = !this.contactActive
        }
    }
}
</script>

<style scoped>
.popout::before {
    content: '';
    position: absolute;
    top: -22px;
    right: 0;
    width: 0;
    height: 0;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    border-bottom: 22px solid #f2f5f9;
    @apply mr-4;

    @screen 3xl {
        @apply mr-22;
    }
}
</style>
