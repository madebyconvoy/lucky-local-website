<template>
    <div>
        <div class="p-5 md:py-16 bg-white md:bg-transparent absolute top-0 w-full z-50">
            <Container class="flex justify-between">
                <Logo class="w-24 md:w-56"/>
            </Container>
        </div>
        <Nuxt />
    </div>
</template>

<script>
import Logo from "@/components/Logo";
import Container from "@/components/utils/Container"

export default {
    components: {
        Logo,
        Container
    }
}
</script>
