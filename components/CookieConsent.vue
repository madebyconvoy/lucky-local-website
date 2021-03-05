<template>
    <div class="fixed bottom-0 right-0 p-10 bg-blue text-white shadow-xl max-w-xl" v-if="show">
        <p>
            Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei, diese Website besser zu machen. Wenn du diese Seite weiter benutzt, gehen wir davon aus, dass du mit unseren <nuxt-link class="text-white underline" to="/datenschutz">Datenschutzbestimmungen</nuxt-link> einverstanden bist.
        </p>
        <div class="flex space-x-5 mt-10 justify-between">
            <button class="text-white font-title font-extrabold" type="secondary" @click="cancel">Ablehnen</button>
            <button @click="consent"><Button class="pointer-events-none">Akzeptieren</Button></button>
        </div>
    </div>
</template>

<script>
import Button from "@/components/utils/Button"
export default {
    components: {
        Button
    },
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = window.cookieguard.isExpired();
    },

    methods: {
        consent() {
            window.cookieguard.update(['ga']);

            this.$nextTick(() => this.show = window.cookieguard.isExpired());
        },
        cancel() {
            window.cookieguard.update([]);
            this.$nextTick(() => this.show = window.cookieguard.isExpired());
        },
    }
}
</script>
