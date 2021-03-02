<template>
    <vue-glide
        type="carousel"
        focusAt="center"
        :perView="5.5"
        :gap="50"
        :breakpoints="breakpoints"
        v-model="active"
    >
        <vue-glide-slide
            v-for="(item, index) in items"
            :key="`slide-${index}`"
            :data-id="index"
            class="my-5"
        >
            <div
                class="border-4 border-white rounded transition transform duration-200 ease-in-out opacity-25 my-10"
                :class="
                    active == index
                        ? 'opacity-100 scale-110'
                        : 'opacity-25 scale-100'
                "
            >
                <img :src="item.src" :alt="item.alt" />
            </div>
        </vue-glide-slide>

        <template slot="control">
            <button
                class="hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 w-10 md:w-14"
                data-glide-dir="<"
            >
                <svg
                    class="text-blue hover:text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 58 102"
                >
                    <g fill="none" fill-rule="evenodd">
                        <path
                            class="fill-white hover:fill-blue-500 transition-all duration-200 ease-in-out"
                            fill="#FFF"
                            d="M7 0H0v102h7c28.167 0 51-22.833 51-51S35.167 0 7 0z"
                        />
                        <path
                            class="transition-all duration-200 ease-in-out"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M23.555 40l-12 11 12 11"
                        />
                    </g>
                </svg>
            </button>

            <button
                class="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 w-10 md:w-14"
                data-glide-dir=">"
            >
                <svg
                    class="text-blue hover:text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 58 102"
                >
                    <g fill="none" fill-rule="evenodd">
                        <path
                            class="fill-white hover:fill-blue-500 transition-all duration-200 ease-in-out"
                            fill="#FFF"
                            d="M51 0h7v102h-7C22.833 102 0 79.167 0 51S22.833 0 51 0z"
                        />
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M34.445 40l12 11-12 11"
                        />
                    </g>
                </svg>
            </button>
        </template>
    </vue-glide>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },

    computed: {
        breakpoints() {
            return {
                640: {
                    perView: 1,
                    gap: 40,
                    peek: 90
                },
                768: {
                    perView: 3,
                    peek: 60
                },
                1024: {
                    perView: 4
                },
                1280: {
                    perView: 4,
                    peek: 0
                },
                1600: {
                    perView: 4,
                    gap: 50
                }
            }
        },

        items() {
            return [
                {
                    img: 'motiv-bahnhof-tv-luckylocal.jpg',
                    alt: 'motiv bahnhof tv luckylocal'
                },
                {
                    img: 'motiv-limo-frische-luckylocal.jpg',
                    alt: 'motiv limo frische luckylocal'
                },
                {
                    img: 'motiv-luxury-furniture-luckylocal.jpg',
                    alt: 'motiv luxury furniture luckylocal'
                },
                {
                    img: 'motiv-moebelhaus-bianchi-luckylocal.jpg',
                    alt: 'motiv moebelhaus bianchi luckylocal'
                },
                {
                    img: 'motiv-mvhoch-restaurant-luckylocal.jpg',
                    alt: 'motiv mvhoch restaurant luckylocal'
                },
                {
                    img: 'motiv-sportwelt-fruehling-luckylocal.jpg',
                    alt: 'motiv sportwelt fruehling luckylocal'
                },
                {
                    img: 'motiv-sportwelt-sommer-luckylocal.jpg',
                    alt: 'motiv sportwelt sommer luckylocal'
                }
            ].map(item => {
                item.src = require(`~/assets/slider/${item.img}`)
                return item
            })
        }
    }
}
</script>
