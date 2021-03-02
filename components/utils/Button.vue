<template>
    <span :class="style">
        <slot />
    </span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        style() {
            return this[this.type]
        },
        primary() {
            return 'block rounded-full font-title font-extrabold text-16 md:text-18 text-white text-center bg-primary px-2 py-5 md:py-5 md:px-10'
        },
        secondary() {
            return 'block rounded-full font-title font-extrabold text-22 md:text-30 text-blue text-center bg-white p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'
        }
    }
}
</script>

<style scoped>
.bg-primary {
    background-image: linear-gradient(
        135deg,
        #dd386e 0%,
        #e6294d 24%,
        #ee6960 50%,
        #e6294d 74%,
        #dd386e 100%
    );
    background-size: 200% 100%;
    background-position: left;
    transition: background-position 240ms ease-in-out;
}
.bg-primary:hover {
    background-position: right;
}
</style>
