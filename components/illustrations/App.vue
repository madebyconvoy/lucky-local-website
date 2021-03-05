<template>
    <div class="relative ">
        <img
            class="w-full shadow-lg hidden md:block"
            src="@/assets/app-large.png"
            alt=""
        />
        <img
            class="block w-8/12 mx-auto rounded-3xl shadow-lg md:hidden"
            src="@/assets/app-mobile.png"
            alt=""
        />

        <fade-in-on-scroll>
            <img
                class="app-create absolute left-1/6 top-1/2 -translate-x-1/2 md:top-0 md:left-2/3 transform -translate-y-1/2 block rounded-full shadow-lg"
                src="@/assets/app-utils-create.svg"
                alt=""
            />
            <img
                class="app-edit absolute right-1/6 top-2/3 -translate-y-1/2 md:top-2/3 md:right-0 transform translate-x-1/2 block rounded-full shadow-lg"
                src="@/assets/app-utils-edit.svg"
                alt=""
            />
            <img
                class="app-notification md:hidden absolute right-1/12 top-1/3 transform block shadow-lg rounded-full"
                src="@/assets/app-utils-notifications.svg"
                alt=""
            />
            <img
                class="app-utils md:block absolute bottom-0 left-2/3 transform -translate-x-1/2 translate-y-1/2 block shadow-lg"
                src="@/assets/app-utils-state.svg"
                alt=""
            />
        </fade-in-on-scroll>
    </div>
</template>

<script>
import FadeInOnScroll from '@/components/transitions/FadeInOnScroll'

export default {
    components: {
        FadeInOnScroll
    }
}
</script>

<style scoped>
.app-create {
    width: 25.26%;

    @screen md {
        width: 18.09%;
    }
}

.app-edit {
    width: 18.88%;

    @screen md {
        width: 13.53%;
    }
}

.app-utils {
    width: 53.08%;
}

.app-notification {
    width: 14.36%;
}
</style>
