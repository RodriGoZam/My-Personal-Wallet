<template>
    <v-container>
        <NavDrawer/>
        <CrearWallet/>
    </v-container>
</template>
<script>
import CrearWallet from '@/components/CrearWallet.vue'
import NavDrawer from '@/components/NavDrawer.vue'

export default {
    components: {
        CrearWallet,
        NavDrawer
    }
}
</script>
<style scoped>

</style>
